import React, {Component} from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  };

  loggedIn = false;

  users = [
    {username: 'alen', password: 'alen'},
    {username: 'pesho', password: 'pesho'},
    {username: 'kiro', password: 'kiro'}
  ];

  constructor() {
    super();
    this.updateInputValue = this.updateInputValue.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.login = this.login.bind(this);

  }

  login() {
    let username = this.state.username;
    let password = this.state.password;
    this.users.forEach((item) => {
      if (item.username === username && item.password === password) {
        this.loggedIn = true;
        window.location = '/cinemas';
      }
    })
  }

  updateInputValue(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  updatePassword(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  render() {
    if (this.loggedIn === false) {
      return (
        <div className="login-form">
          <input onChange={this.updateInputValue} type="text" placeholder={'Username'}/>
          <input onChange={this.updatePassword} type="password" placeholder={'Password'}/>
          <button onClick={this.login}>Login</button>
        </div>
      );
    }
  }
}

export default LoginForm;
