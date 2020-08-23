import React, { Component } from 'react';
import FormInput from '../../FormInput/FormInput';
import CustomButton from '../../CustomButton/CustomButton';
import { signInWithGoogle, auth } from '../../../firebase/index';
import classes from './Signin.module.scss';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      alert(error);
    }
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
          <div className={classes.buttons}>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}


export default Signin;
