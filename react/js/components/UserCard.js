import React from 'react';

export default class UserCard extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <div className="ui link card">
        <div className="center aligned header">{user.name.first}</div>
      </div>
    );
  }
}
