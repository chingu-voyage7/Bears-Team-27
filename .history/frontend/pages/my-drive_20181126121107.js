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
    {props.thumbnail ? <img src={props.thumbnail} alt={props.name} /> : null}
    <button onClick={props.secureUrl}>Download</button>
  </div>
);

class MyDrive extends React.Component {
  static async getInitialProps() {
    console.log('hello at mydrive');
    const res = await fetch('http://localhost:3000/api/resources/');
    const resources = await res.json();
    console.log(`Show data fetched. Count: ${resources.length}`);

    return {resources};
  }
  /*componentDidMount() {
    this.setState({
      resources: this.props.resources,
    });
  }*/
  render() {
    const {resources} = this.props;
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
        {resources &&
          resources.length > 0 &&
          resources.map(item => {
            return (
              <MyDriveItem
                key={item._id}
                secureUrl={item.secureUrl}
                name={item.name}
                thumbnail={item.thumbnail}
              />
            );
          })}
      </div>
    );
  }
}
export default MyDrive;
