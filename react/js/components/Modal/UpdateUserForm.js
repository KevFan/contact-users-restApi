import React from 'react';
import SuperAgent from 'superagent'; // small progressive client-side HTTP request library
import { Form } from 'semantic-ui-react';

export default class UpdateUserForm extends React.Component {
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

  handleChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    console.log('setting state: ' + name + ' ' + value);

  }

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

  render() {
    let user = this.props.user;
    return (
      <Form onSubmit={this.updateUser}>
        <Form.Group widths='equal'>
          <Form.Input icon='genderless' placeholder={user.name.title} name='title' onChange={this.handleChange} />
          <Form.Input icon='user' placeholder={user.name.first} name='first' onChange={this.handleChange} />
          <Form.Input icon='user' placeholder={user.name.last} name='last' onChange={this.handleChange} />
        </Form.Group>
        <Form.Button content='Update' circular color='blue' icon='save'/>
      </Form>

    );
  }
}
