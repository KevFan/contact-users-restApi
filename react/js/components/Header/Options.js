import React from 'react';
import { Button } from 'semantic-ui-react';
import AddUserModal from '../CustomModal';
import AddUserForm from '../Modal/AddUserForm';

export default class Options extends React.Component {
  render() {
    return (
      <section className="ui center aligned fluid search basic segment">
        {/*Buttons for user*/}
        <button className="ui circular teal icon button">
          <i className="users icon" />
        </button>
        <button className="ui circular olive icon button">
          <i className="user icon" />
        </button>
        {/*Add user button*/}
        <AddUserModal
          button={<Button circular color='blue' icon='plus'/>}
          form={<AddUserForm addUserList={this.props.addUserList.bind(this)} />}
          header='Add new user'/>
        {/*Search - is passed in as property*/}
        {this.props.search}
      </section>
    );
  }
}
