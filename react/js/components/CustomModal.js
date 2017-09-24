import React from 'react';
import { Modal } from 'semantic-ui-react';

/**
 * Custom Modal component that uses the semantic ui react Modal component
 * Used in adding and updating a user
 * The modal trigger, content header and form content is passed in as properties
 */
export default class CustomModal extends React.Component{
  /**
   * Renders and returns the CustomModal component
   */
  render() {
    return (
      <Modal trigger={this.props.button} closeIcon>
        <Modal.Header>{this.props.header}</Modal.Header>
        <Modal.Content>
          {this.props.form}
        </Modal.Content>
      </Modal>
    );
  }
}
