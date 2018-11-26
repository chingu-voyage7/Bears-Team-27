import React from 'react';
import fetch from 'isomorphic-unfetch';

class MyDrive extends React.Component {
  state = {resources: []};
  static async getInitialProps() {
    const res = await fetch('http://localhost:3000/api/resources/');
    const resources = await res.json();

    return {resources};
  }
  componentDidMount() {
    this.setState({
      resources: this.props.resources,
    });
  }
  render() {
    return (
      <div>
        {' '}
        {props.items.map(item => {
          return (
            <ThumbnailItem
              key={item.index}
              progress={item.progress}
              file={item.file}
              response={item.response}
              onCancelUpload={() => props.onCancelUpload(item.index)}
            />
          );
        })}
      </div>
    );
  }
}
export default MyDrive;
