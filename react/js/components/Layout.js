import React from 'react';
import SuperAgent from 'superagent'; // small progressive client-side HTTP request library

import Header from './Header';

export default class Layout extends React.Component {
  /**
   * React method that is invoked immediately after a component is mounted
   * Uses SuperAgent to call /users endpoint to get list of users
   */
  componentDidMount() {
    SuperAgent
      .get('/users')
      .end((error, response) => {
        if (error) {
          console.log('Error getting list of users from Layout');
        } else {
          console.log(response.body);
        }
      });
  }

  render() {
    return (
      <div>
        <section className='ui container'>
          <Header/>
        </section>
      </div>
    );
  }
}
