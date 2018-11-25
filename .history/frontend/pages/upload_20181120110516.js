import Link from 'next/link';

class Upload extends React.Component {
  uploadPreset = 'chingu';
  cloudName = 'rachnaban';
  state = {
    image: '',
    largeImage: '',
  };
  uploadFiles = e => {
    const files = e.target.files;
    for (var i = 0; i < files.length; i++) {
      this.uploadFile(e, files[i]); // call the function to upload the file
    }
  };
  uploadFile = async (e, file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', this.uploadPreset);

    /*const res = await fetch(
      `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`,
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    console.dir(file);
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });*/
    var url = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`;
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // Reset the upload progress bar
    document.getElementById('progress').style.width = 0;

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener('progress', function(e) {
      var progress = Math.round((e.loaded * 100.0) / e.total);
      document.getElementById('progress').style.width = progress + '%';

      console.log(`fileuploadprogress data.loaded: ${e.loaded},
  data.total: ${e.total}`);
    });

    xhr.onreadystatechange = function(e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // File uploaded successfully
        var response = JSON.parse(xhr.responseText);
        // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
        var url = response.secure_url;

        // Create a thumbnail of the uploaded image, with 150px width
        var tokens = url.split('/');
        tokens.splice(-2, 1, 'w_150,c_scale');
        console.log('from tokens' + tokens.join('/'));
        var img = new Image(); // HTML5 Constructor
        img.src = tokens.join('/');
        img.alt = response.public_id;
        document.getElementById('gallery').appendChild(img);
      }
    };

    fd.append('upload_preset', this.uploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', file);
    xhr.send(fd);
  };
  render() {
    return (
      <div>
        <label htmlFor="file">
          Image{' '}
          <input
            type="file"
            multiple
            id="file"
            name="file"
            placeholder="Upload Files"
            required
            onChange={this.uploadFiles}
          />{' '}
          {this.state.image && (
            <img width="200" src={this.state.image} alt="Upload Preview" />
          )}{' '}
        </label>{' '}
        <div className="progress-bar" id="progress-bar">
          <div className="progress" id="progress" />
        </div>{' '}
        <div id="gallery" />
      </div>
    );
  }
}

export default Upload;
