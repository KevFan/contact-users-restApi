import React from 'react';

/**
 * Component for the Logo
 */
export default class Logo extends React.Component {
  /**
   * Render methods that returns an element for the header logo
   */
  render() {
    return (
      <div>
        <h2 className="ui center aligned icon header">
          <i className="circular users icon"/>
          Contact List
        </h2>
        <div className="ui divider"/>
      </div>
    );
  }
}
