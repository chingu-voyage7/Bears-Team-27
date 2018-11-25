import React from 'react';
import fetch from 'isomorphic-unfetch';

class MyDrive extends React.Component
{
    static async getInitialProps() {
        const res = await fetch('http://localhost:3000/api/resources');
        const resources = await res.json()
        return { resources }
      }
    render()
    {
        return();
    }
}
export default MyDrive;