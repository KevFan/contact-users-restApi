import React from 'react';
import { Modal } from 'semantic-ui-react';

export default class CustomModal extends React.Component{
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
