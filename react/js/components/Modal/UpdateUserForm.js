import React from 'react';
import SuperAgent from 'superagent'; // small progressive client-side HTTP request library
import { Form } from 'semantic-ui-react';

/**
 * UpdateUserForm Component
 */
export default class UpdateUserForm extends React.Component {
  /**
   * Constructor for the UserFormComponent
   * Sets the state to the user properties that is passed in
   * @param props Properties of the component
   */
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.user.name.title,
      first: this.props.user.name.first,
      last: this.props.user.name.last,
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  /**
   * Handles the change in state as user enters new info the form fields to update user properties
   * @param event - Uses a onChange event to listen to user interaction
   */
  handleChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    console.log('setting state: ' + name + ' ' + value);

  }

  /**
   * Updates the User with state information - Uses SuperAgent to send a put request to the /users/:id endpoint
   * The updateUserList property that is passed in to the component is called to remove the element from the DOM
   * @param event - Uses a onSubmit event for when the user submits the form
   */
  updateUser(event) {
    SuperAgent
      .put('/users/' + this.props.user._id)
      .send({
        name: { title: this.state.title, first: this.state.first, last: this.state.last },
      })
      .end((error, response) => {
        if (error) {
          console.log('UpdateUserForm - Error updating new user ');
        } else {
          this.props.updateUserList(this.props.userIndex, response.body);
          console.log(response.body);
        }
      });
  }

  /**
   * Renders and returns the UpdateUserForm component
   */
  render() {
    let user = this.props.user;
    return (
      <Form onSubmit={this.updateUser}>
        <Form.Group widths='equal'>
          <Form.Input icon='genderless' placeholder={user.name.title} name='title'
                      onChange={this.handleChange}/>
          <Form.Input icon='user' placeholder={user.name.first} name='first'
                      onChange={this.handleChange}/>
          <Form.Input icon='user' placeholder={user.name.last} name='last'
                      onChange={this.handleChange}/>
        </Form.Group>
        <Form.Button content='Update' circular color='blue' icon='save'/>
      </Form>
    );
  }
}
