import React from 'react';
import { Button } from 'semantic-ui-react';
import AddUserModal from '../CustomModal';
import AddUserForm from '../Modal/AddUserForm';

export default class Options extends React.Component {
  render() {
    const form = AddUserForm;
    return (
      <section className="ui center aligned fluid search basic segment">
        {/*Buttons for user*/}
        <button id="listAllButton" className="ui circular teal icon button">
          <i className="users icon" />
        </button>
        <button className="ui circular olive icon button">
          <i className="user icon" />
        </button>
        {/*Add user button*/}
        <AddUserModal
          button={<Button circular color='blue' icon='plus'/>}
          form={<AddUserForm/>}
          header='Add new user'/>
        {/*Search - doesnt work yet*/}
        <div className="ui left icon input field">
          <i className="search icon" />
          <input className="prompt" placeholder="Search Contacts" name="search" />
        </div>
        <div className="aligned results" />
      </section>
    );
  }
}
