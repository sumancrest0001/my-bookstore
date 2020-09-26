import React, { Component } from 'react';
import FormInput from '../../FormInput/FormInput';
import { auth, createUserProfileDocument } from '../../../firebase/index';
import CustomButton from '../../CustomButton/CustomButton';
import classes from './Signup.module.scss';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {
      displayName, email, password, confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.props.history.push('/');
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      alert(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      displayName, email, password, confirmPassword,
    } = this.state;
    return (
      <div className={classes.Signup}>
        <h2 className={classes.Title}>I already have an account</h2>
        <span>Signin with your email and password</span>
        <form onSubmit={this.handleSubmit} className={classes.Form}>
          <FormInput type="text" name="displayName" label="displayName" value={displayName} handleChange={this.handleChange} required />
          <FormInput type="email" name="email" label="email" value={email} handleChange={this.handleChange} required />
          <FormInput type="password" name="password" label="password" value={password} handleChange={this.handleChange} required />
          <FormInput type="password" name="confirmPassword" label="confirmPassword" value={confirmPassword} handleChange={this.handleChange} required />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default Signup;
