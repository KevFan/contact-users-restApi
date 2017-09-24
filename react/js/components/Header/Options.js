import React from 'react';import { Button } from 'semantic-ui-react';
import AddUserModal from '../CustomModal';
import AddUserForm from '../Modal/AddUserForm';

/**
 * Options component - contains the header user options such as search and adding a user
 */
export default class Options extends React.Component {
  /**
   * Render method - contains header button such as adding a user and search (passed in as a property)
   * Contains a add user modal and form
   */
  render() {
    return (
      <section className="ui center aligned basic segment">
        {/*Buttons for user*/}
        {/*Add user button*/}
        <AddUserModal
          button={<Button circular color='blue' icon='add user'/>}
          form={<AddUserForm addUserList={this.props.addUserList.bind(this)} />}
          header={{ content: 'Add new user' }}
        />

        <a href='https://github.com/KevFan/contact-users-restApi'>
          <Button circular icon='github'/>
        </a>


        {/*Search - is passed in as property*/}
        {this.props.search}
      </section>
    );
  }
}
