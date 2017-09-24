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
      return (<UserCard user={specificUser} index={userIndex} removeUser={this.removeUser.bind(this)} />);
    });
  }

  /**
   * Function to delete user from the user list by index
   * @param userIndex
   */
  removeUser(userIndex) {
    // Get the list of users from the object state and remove user by index
    let listOfUsers = this.state.users;
    if (userIndex > -1) {
      listOfUsers.splice(userIndex, 1);
    }

    // Set the state to the new list of uses to refresh the DOM
    this.setState({
      users: listOfUsers,
    });
  }

  /**
   * Function to add user from the user list
   * @param user User to add
   */
  addUserList(user) {
    // Get the list of users from the object state and add user
    let listOfUsers = this.state.users;
    listOfUsers.push(user);

    // Set the state to the new list of uses to refresh the DOM
    this.setState({
      users: listOfUsers,
    });
  }

  render() {
    const listOfUserCards = this.getListOfUserCards();

    return (
      <div>
        <section className='ui container'>
          <Header addUserList={this.addUserList.bind(this)}/>
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
