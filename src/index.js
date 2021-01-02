import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './client/HomePage';
import AuthPage from './client/AuthPage';
import UpdatePage from './client/UpdatePage';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

ReactDOM.render(
  <Router>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/signin" exact={true} component={AuthPage} />
        <Route path="/signup" exact={true} component={AuthPage} />
        <Route path="/update/:id" exact={true} component={UpdatePage} />
      </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
