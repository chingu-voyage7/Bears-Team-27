import React from 'react';
import fetch from 'isomorphic-unfetch';

const 
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
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: '20px',
        flexWrap: 'wrap',
      }}>
        {this.props.resources.map(item => {
          return (
            <MyDriveItem
              key={item._id}
              secureUrl={item.secureUrl}
              name={item.name}
            />
          );
        })}
      </div>
    );
  }
}
export default MyDrive;
