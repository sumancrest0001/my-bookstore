import React, { Component } from 'react';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';
import FormInput from '../../FormInput/FormInput';
import CustomButton from '../../CustomButton/CustomButton';
import { provider, auth } from '../../../firebase/index';
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
      this.props.history.goBack();
    } catch (error) {
      alert(error);
    }
  }

  signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    auth.signInWithPopup(provider)
      .then(result => {
        this.props.history.goBack();
      })
      .catch(error => {
        alert(error.message);
      });
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
          <p className={classes.signupLink}>
            Do not have an account?
            <Link to="/register">Sign up now</Link>
          </p>
          <div className={classes.buttons}>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={this.signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}


export default Signin;
