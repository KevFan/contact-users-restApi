import React from 'react';

import Logo from './Header/Logo';
import HeaderOptions from './Header/Options';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Logo/>
        <HeaderOptions
          users={this.props.users}
          addUserList={this.props.addUserList.bind(this)}
          search={this.props.search}
        />
      </div>
    );
  }
}
