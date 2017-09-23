import React from 'react';

export default class Options extends React.Component {
  render() {
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
        <button className="ui circular blue icon button" id="showAddUserModal">
          <i className="plus icon" />
        </button>
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
