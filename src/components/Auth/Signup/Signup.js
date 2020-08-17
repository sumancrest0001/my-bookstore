import React, { Component } from 'react';
import FormInput from '../../FormInput/FormInput';
import classes from './Signin.module.scss';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className={classes.Signin}>
        <h2 className={classes.Title}>I already have an account</h2>
        <span>Signin with your email and password</span>
        <form onSubmit={this.handleSubmit} className={classes.Form}>
          <FormInput type="email" name="email" label="email" value={email} handleChange={this.handleChange} required />
          <FormInput type="password" name="password" label="password" value={password} handleChange={this.handleChange} required />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default Signup;
