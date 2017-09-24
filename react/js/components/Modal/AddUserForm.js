import React from 'react';
import SuperAgent from 'superagent'; // small progressive client-side HTTP request library
import { Form } from 'semantic-ui-react';
export default class AddUserForm extends React.Component {
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

  handleChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

  }

  setStateBackToEmpty(event) {
    this.setState({
      title: '',
      first: '',
      last: '',
    });
  }

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

  render() {
    return (
      <Form onSubmit={this.addUser}>
        <Form.Group widths='equal'>
          <Form.Input icon='genderless' placeholder='Title' name='title' value={this.state.title} onChange={this.handleChange} />
          <Form.Input icon='user' placeholder='First Name' name='first' value={this.state.first}  onChange={this.handleChange} />
          <Form.Input icon='user' placeholder='Last Name' name='last'  value={this.state.last} onChange={this.handleChange} />
        </Form.Group>
        <Form.Button content='Submit' circular color='blue' icon='save'/>
      </Form>
    );
  }
}
