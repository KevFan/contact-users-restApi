import React from 'react';

import Logo from './Header/Logo';
import HeaderOptions from './Header/Options';

/**
 * Header component to keep the header components together
 * Made of the Logo and Options component
 */
export default class Header extends React.Component {
  /**
   * Render method to return Header component element
   */
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
