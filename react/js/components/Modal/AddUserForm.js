import React from 'react';
import SuperAgent from 'superagent'; // small progressive client-side HTTP request library

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
          console.log(response.body);
        }
      });
  }

  render() {
    return (
      <form className="ui segment form" onSubmit={this.addUser}>
        <section className="three fields">
          <div className="field">
            <label>Title</label>
            <div className="ui selection dropdown">
              <i className="genderless icon"/>
              <input type="hidden" name="title" value={this.state.title} onChange={this.handleChange} />
              <i className="dropdown icon"/>
              <div className="default text">Title</div>
              <div className="menu">
                <div className="item" data-value="miss">Miss</div>
                <div className="item" data-value="mr">Mr</div>
                <div className="item" data-value="mrs">Mrs</div>
              </div>
            </div>
          </div>

          <div className="field">
            <label>First Name</label>
            <div className="ui input left icon">
              <i className="user icon"/>
              <input id="first" placeholder="First Name" type="text" name="first" value={this.state.first} onChange={this.handleChange}/>
            </div>
          </div>

          <div className="field">
            <label>Last Name</label>
            <div className="ui input left icon">
              <i className="user icon"/>
              <input placeholder="Last Name" type="text" name="last" value={this.state.last} onChange={this.handleChange} />
            </div>
          </div>
        </section>
        <section className="three fields">
          <div className="field">
            <label>Gender</label>
            <div className="ui selection dropdown">
              <i className="genderless icon"/>
              <input type="hidden" name="gender"/>
              <i className="dropdown icon"/>
              <div className="default text">Gender</div>
              <div className="menu">
                <div className="item" data-value="Male">Male</div>
                <div className="item" data-value="Female">Female</div>
              </div>
            </div>
          </div>

          <div className="field">
            <label>Email</label>
            <div className="ui input left icon">
              <i className="mail icon"/>
              <input placeholder="Email" type="text" name="email"/>
            </div>
          </div>

          <div className="field">
            <label>Username</label>
            <div className="ui input left icon">
              <i className="address book icon"/>
              <input placeholder="Username" type="text" name="username"/>
            </div>
          </div>
        </section>
        <section className="two fields">
          <div className="field">
            <label>Password</label>
            <div className="ui input left icon">
              <i className="lock icon"/>
              <input placeholder="Password" type="password" name="password"/>
            </div>
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <div className="ui input left icon">
              <i className="lock icon"/>
              <input placeholder="Confirm Password" type="password" name="confirmPassword"/>
            </div>
          </div>
        </section>

        <section className="four fields">
          <div className="field">
            <label>Date of Birth</label>
            <div className="ui input left icon">
              <i className="calendar icon"/>
              <input placeholder="Date of Birth" type="text" name="dob"/>
            </div>
          </div>
          <div className="field">
            <label>Phone Number</label>
            <div className="ui input left icon">
              <i className="volume control phone icon"/>
              <input placeholder="Phone Number" type="text" name="phone"/>
            </div>
          </div>
          <div className="field">
            <label>Cell Phone Number</label>
            <div className="ui input left icon">
              <i className="mobile icon"/>
              <input placeholder="Cell Phone No." type="text" name="cell"/>
            </div>
          </div>

          <div className="field">
            <label>PPS</label>
            <div className="ui input left icon">
              <i className="hashtag icon"/>
              <input placeholder="PPS" type="text" name="pps"/>
            </div>
          </div>
        </section>

        <section className="ui accordion field">
          <div className="title">
            <i className="icon dropdown"/>
            Location
          </div>
          <section className="content fields">
            <div className="transition hidden content field">
              <label>Street</label>
              <div className="ui input left icon">
                <i className="home icon"/>
                <input placeholder="Street" type="text" name="street"/>
              </div>
            </div>
            <div className="transition hidden content field">
              <label>City</label>
              <div className="ui input left icon">
                <i className="home icon"/>
                <input placeholder="City" type="text" name="city"/>
              </div>
            </div>
            <div className="transition hidden content field">
              <label>State</label>
              <div className="ui input left icon">
                <i className="home icon"/>
                <input placeholder="State" type="text" name="state"/>
              </div>
            </div>
            <div className="transition hidden content field">
              <label>ZIP</label>
              <div className="ui input left icon">
                <i className="hashtag icon"/>
                <input placeholder="ZIP" type="text" name="zip"/>
              </div>
            </div>
          </section>
        </section>
        <button className="ui blue submit button"><i className="add user icon"/>Submit</button>
        <div className="ui error message"/>
      </form>

    );
  }
}
