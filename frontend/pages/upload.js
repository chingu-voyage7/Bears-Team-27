import Link from 'next/link';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import Thumbnail from '../components/Thumbnail';
const keys = require('../../config/keys');
const FileControl = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  input[type='file'] {
    height: 50px;
    font-size: 1.5rem;
  }
  input[type='file']::-webkit-file-upload-button {
    height: 50px;
    font-size: 1.5rem;
    width: 200px;
  }
`;

class Upload extends React.Component {
  uploadPreset = keys.uploadPreset;
  cloudName = keys.cloudName;
  ref = React.createRef();
  xhrs = [];
  state = {items: [], message: ''};

  uploadFiles = e => {
    const files = e.target.files;
    const items = this.filesToItems(files);
    this.setState({items, message: ''}, () => {
      this.upload();
    });
  };

  upload = () => {
    const items = this.state.items;
    if (items) {
      items
        .filter(item => !item.cancelled)
        .forEach(item => {
          this.uploadItem(item);
        });
    }
  };
  uploadItem = item => {
    this.uploadFile(item.file, (progress, response) =>
      this.updateFileProgress(item.index, progress, response),
    );
  };
  clearIfAllCompleted() {
    const completed = this.state.items.filter(item => item.progress === 100)
      .length;
    if (completed === this.state.items.length) {
      setTimeout(() => {
        this.setState(
          {items: [], message: 'All Files Uploaded Successfully!'},
          () => {
            this.ref.current.value = '';
          },
        );
      }, 3000);
    }
  }

  updateFileProgress(index, progress, response) {
    const newItems = [...this.state.items];
    newItems[index] = Object.assign(
      {},
      this.state.items[index],
      {progress},
      {response},
    );
    //todo
    this.setState({items: newItems}, this.clearIfAllCompleted);
    // this.setState({items: newItems});
  }

  uploadFile = (file, progressCallback) => {
    if (file) {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();
      const url = `https://api.cloudinary.com/v1_1/${
        this.cloudName
      }/auto/upload`;
      console.log(url);
      formData.append('file', file, file.name);
      formData.append('upload_preset', this.uploadPreset);
      formData.append('tags', 'browserUpload');

      //Upload completed successfully
      xhr.onload = () => {
        const response = JSON.parse(xhr.response);

        var tokens = response.secure_url.split('/');
        tokens.splice(-2, 0, 'w_150,h_150,c_scale');
        tokens.splice(-4, 1);
        tokens.splice(-1, 1, `${response.public_id.split('/')[1]}.jpg`);
        const resource = {
          name: file.name,
          secureUrl: response.secure_url,
          thumbnail: tokens.join('/'),
        };

        this.saveResourceRefToMongo(resource);
        progressCallback(100, {
          src: tokens.join('/'),
          alt: response.public_id,
          downloadUrl: response.secure_url,
        });
      };

      xhr.upload.onprogress = e => {
        if (e.lengthComputable) {
          progressCallback((e.loaded / e.total) * 100, null);
        }
      };

      xhr.open('POST', url, true);
      xhr.send(formData);
      this.xhrs[file.index] = xhr;
    }
  };

  saveResourceRefToMongo = async resource => {
    let header = new Headers({
      'Content-Type': 'application/json',
    });

    const res = await fetch('http://localhost:3000/api/resources/new', {
      method: 'POST',
      mode: 'cors',
      headers: header,
      body: JSON.stringify(resource),
    });
  };
  filesToItems(files) {
    const fileItems = Array.from(files);
    const items = fileItems.map((f, i) => {
      return {file: f, index: i, progress: 0, cancelled: false};
    });
    return items;
  }
  cancelFile = index => {
    const newItems = [...this.state.items];
    newItems[index] = Object.assign({}, this.state.items[index], {
      cancelled: true,
    });
    if (this.xhrs[index]) {
      this.xhrs[index].upload.removeEventListener('progress');
      this.xhrs[index].removeEventListener('load');
      this.xhrs[index].abort();
    }
    this.setState({items: newItems, message: ''}, () => {
      this.ref.current.value = '';
    });
  };

  displayUploads = () => {
    const items = this.state.items;
    if (items.length > 0) {
      return <Thumbnail items={items} />;
    }
  };

  render() {
    return (
      <FileControl>
        <label htmlFor="file">
          <input
            ref={this.ref}
            type="file"
            multiple
            id="file"
            name="file"
            placeholder="Upload Files"
            required
            onChange={this.uploadFiles}
          />
        </label>
        {this.state.message.length > 0 && (
          <label style={{marginTop: '10px', fontSize: '1.2rem'}}>
            {this.state.message}
          </label>
        )}
        {this.state.items.length > 0 && (
          <Thumbnail
            items={this.state.items}
            onCancelUpload={this.cancelFile}
          />
        )}
      </FileControl>
    );
  }
}

export default Upload;
