import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AdminMainContainer from './container/AdminContainers/AdminMainContainer/AdminMainContainer';
import classes from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <AdminMainContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
