import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import HomePage from './container/HomePage/HomePage';
import AdminMainContainer from './container/AdminContainers/AdminMainContainer/AdminMainContainer';
import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';
import Logout from './components/Auth/Logout/Logout';
import { auth, createUserProfileDocument } from './firebase/index';
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
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          const result = snapShot.data().email === 'suman.crest0001@gmail.com';
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
            admin: result,
          });
        });
      } else {
        this.setState({ currentUser: userAuth, admin: false });
      }
    });
  }

  componentDidUpdate() {
    console.log('componentShouldUpdate');
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
    console.log('componentWillUnmount');
  }

  render() {
    console.log(this.state.admin);
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Switch>
            <Route path="/signin" exact component={Signin} />
            <Route path="/register" exact component={Signup} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/auth" render={() => (this.state.admin ? <AdminMainContainer /> : <HomePage />)} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
