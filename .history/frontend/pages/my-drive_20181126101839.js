import React from 'react';
import fetch from 'isomorphic-unfetch';

const MyDriveItem = props => (
  <div
    style={{
      width: '180px',
      height: '180px',
      borderRadius: '10px',
      border: '1px solid grey',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '5px',
      margin: '5px',
      backgroundColor: '#3633FE',
    }}
  >
    <div style={{position: 'absolute', bottom: '8px'}}>{props.name}</div>
    {props.secureUrl ? (
      <a href={props.secureUrl}>
        <img src={props.secureUrl} alt={props.name} />
      </a>
    ) : null}
  </div>
);

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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: '20px',
          flexWrap: 'wrap',
        }}
      >
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
