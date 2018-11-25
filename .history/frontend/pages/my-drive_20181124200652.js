import React from 'react';
import fetch from 'isomorphic-unfetch';

class MyDrive extends React.Component {
  state = {resources: []};
  static async getInitialProps() {
    const res = await fetch('http://127.0.0.1:3000/api/resources');
    console.dir(res);
    const resources = await res.json();
    return {resources};
  }
  componentDidMount() {
    this.setState({
      resources: this.props.resources,
    });
  }
  render() {
    return <Hello>MyDrive</Hello>;
  }
}
export default MyDrive;