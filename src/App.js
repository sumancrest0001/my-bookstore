import React, { Component } from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomePage from './container/HomePage/HomePage';
import AdminMainContainer from './container/AdminContainers/AdminMainContainer/AdminMainContainer';
import Header from './components/Header/Header';
import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';
import Logout from './components/Auth/Logout/Logout';
import { auth, createUserProfileDocument } from './firebase/index';
import { setCurrentUser } from './redux/actions/user.actions';
import './App.scss';

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          const result = snapShot.data().email === 'suman.crest0001@gmail.com';
          const currentUser = {
            id: snapShot.id,
            ...snapShot.data(),
          };
          setCurrentUser(currentUser, result);
        });
      } else {
        setCurrentUser(userAuth, false);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/signin" exact component={Signin} />
          <Route path="/register" exact component={Signup} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/auth" component={AdminMainContainer} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user, admin) => dispatch(setCurrentUser(user, admin)),
});

App.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
