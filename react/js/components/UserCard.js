import React from 'react';
import SuperAgent from 'superagent'; // small progressive client-side HTTP request library

export default class UserCard extends React.Component {

  /**
   * Calls the delete user/:id endpoint to remove the user
   */
  deleteUserRequest() {
    SuperAgent
      .del('/users/' + this.props.user._id)
      .end((error, response) => {
        if (error) {
          console.log('UserCard - Error deleting user from request');
        } else {
          this.props.removeUser(this.props.index);
        }
      });
  };

  render() {
    const user = this.props.user;
    return (
      <div className="ui link card">
        <section className="content">
          <div className="center aligned content">
            <img className="ui middle aligned circular small image" src={user.picture.large}/>
          </div>
          <div className="center aligned header">
            {user.name.first} {user.name.last}
          </div>
        </section>
        <section className="center aligned content">
          <button className="ui circular blue icon button">
            <i className="edit icon" />
          </button>
          <button onClick={this.deleteUserRequest.bind(this)} className="ui circular red icon button">
            <i className="delete icon" />
          </button>
        </section>
      </div>
    );
  }
}
