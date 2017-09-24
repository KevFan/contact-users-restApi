import React from 'react';
import SuperAgent from 'superagent'; // small progressive client-side HTTP request library
import EditUserModal from './CustomModal';
import {Button} from 'semantic-ui-react';
import UpdateUserForm from './Modal/UpdateUserForm';

/**
 * User card component that semantic a element using semantic ui css style. Each card can edit or delete the user
 */
export default class UserCard extends React.Component {

  /**
   * Uses SuperAgent as the AJAX library to call the delete user/:id endpoint to remove the user
   * and calls the remove user property passing the user index property to remove the user from the DOM
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

  /**
   * Render method that returns the user card component
   * Style using semantic ui CSS and only display user name and profile picture
   * Contains a update form modal to edit user with properties passed in and delete user
   */
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
          <EditUserModal
            button={<Button circular color='blue' icon='edit'/>}
            form={
              <UpdateUserForm
                updateUserList={this.props.updateUserList.bind(this)}
                user={user} userIndex={this.props.index}
              />}
            header='Update User'
          />
          <button onClick={this.deleteUserRequest.bind(this)} className="ui circular red icon button">
            <i className="delete icon"/>
          </button>
        </section>
      </div>
    );
  }
}
