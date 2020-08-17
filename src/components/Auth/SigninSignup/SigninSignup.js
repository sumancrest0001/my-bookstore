import React, { Component } from 'react';
import Signin from '../Signin/Signin';
import { auth } from '../../../firebase/index';
import classes from './SigninSignup.module.css';

class SigninSignup extends Component {
  unSubscribeFromAuth = null;

  constructor() {
    super();
    this.state = {
      currentUser: '',
    };
  }

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Signin />
      </div>
    );
  }
}

export default SigninSignup;
