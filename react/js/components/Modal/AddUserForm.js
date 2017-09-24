import React from 'react';
import SuperAgent from 'superagent'; // small progressive client-side HTTP request library
import { Form } from 'semantic-ui-react';

/**
 * Add User form Component
 */
export default class AddUserForm extends React.Component {
  /**
   * Constructor for the component with initial state that stores the user title, first and last name
   * @param props Component Properties
   */
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      first: '',
      last: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  /**
   * Handles the change in state as user is typing in values
   * @param event - Called in the onChange event
   */
  handleChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

  }

  /**
   * Set state back to initial values
   * @param event - Used after the post event happens to clear the form so another user can be added
   */
  setStateBackToEmpty(event) {
    this.setState({
      title: '',
      first: '',
      last: '',
    });
  }

  /**
   * Add user function - Uses SuperAgent to send a post request, with the state values to create user
   * A default picture is also send in the post to keep the Layout design consistent
   * @param event - Uses a onSubmit event by the form
   */
  addUser(event) {
    SuperAgent
      .post('/users')
      .send({
        name: { title: this.state.title, first: this.state.first, last: this.state.last },
        picture: {
          large: 'http://res.cloudinary.com/dv6skh7wa/image/upload/c_scale,w_128/v1500152762/Node%20Gym/login.png',
        },
      })
      .end((error, response) => {
        if (error) {
          console.log('AddUserForm - Error creating new user ');
        } else {
          this.props.addUserList(response.body);
          this.setStateBackToEmpty();
          console.log(response.body);
        }
      });
  }

  /**
   * Renders and return the AddUserForm component
   * Form only takes in title, first and last name to show form concept
   */
  render() {
    return (
      <Form onSubmit={this.addUser}>
        <Form.Group widths='equal'>
          <Form.Input icon='genderless' placeholder='Title' name='title'
                      value={this.state.title} onChange={this.handleChange}/>
          <Form.Input icon='user' placeholder='First Name' name='first'
                      value={this.state.first} onChange={this.handleChange}/>
          <Form.Input icon='user' placeholder='Last Name' name='last'
                      value={this.state.last} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Button content='Submit' circular color='blue' icon='save'/>
      </Form>
    );
  }
}
