import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminMainContainer from './container/AdminContainers/AdminMainContainer/AdminMainContainer';
import SigninSignup from './components/Auth/SigninSignup/SigninSignup';
import classes from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Switch>
          <Route path="/auth" exact component={AdminMainContainer} />
          <Route path="/register" exact component={SigninSignup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
