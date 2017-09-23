import React from 'react';
import SuperAgent from 'superagent'; // small progressive client-side HTTP request library
import UserCard from './UserCard';
import Header from './Header';

export default class Layout extends React.Component {
  /**
   * Constructor for Layout Component - sets state to contain an empty array of users
   */
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

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
          this.setState({
            users: response.body,
          });
        }
      });
  }

  /**
   * Return an array of UserCards - passing the user and userIndex as props to the UserCard
   * component
   * @returns {Array} Array of UserCards
   */
  getListOfUserCards() {
    return this.state.users.map((specificUser, userIndex) => {
      return (<UserCard user={specificUser} index={userIndex} />);
    });
  }

  render() {
    const listOfUserCards = this.getListOfUserCards();

    return (
      <div>
        <section className='ui container'>
          <Header/>
        </section>
        <section className="ui container">
          <div className="ui centered five doubling stackable cards">
            {listOfUserCards}
          </div>
        </section>
      </div>
    );
  }
}
