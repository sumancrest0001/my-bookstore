import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './container/HomePage/HomePage';
import AdminMainContainer from './container/AdminContainers/AdminMainContainer/AdminMainContainer';
import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';
import Logout from './components/Auth/Logout/Logout';
import { auth } from './firebase/index';
import classes from './App.module.css';


class App extends Component {
  unSubscribeFromAuth = null;

  constructor() {
    super();
    this.state = {
      admin: false,
      currentUser: '',
    };
  }

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      const result = user !== null && user.email === 'suman.crest0001@gmail.com';
      console.log(result);
      this.setState({ admin: result });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    const { admin } = this.state;
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Switch>
            <Route path="/auth" exact component={AdminMainContainer} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/register" exact component={Signup} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
