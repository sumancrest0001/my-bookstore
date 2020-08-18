import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../../../firebase';

class Logout extends Component {
  componentDidMount() {
    auth.signOut();
  }

  render() {
    return <Redirect to="/" />;
  }
}


export default Logout;
