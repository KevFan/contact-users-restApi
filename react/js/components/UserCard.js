import React from 'react';

export default class UserCard extends React.Component {
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
          <button className="ui circular red icon button">
            <i className="delete icon" />
          </button>
        </section>
      </div>
    );
  }
}
