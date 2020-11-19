import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import Dashboard from "./dashboard/Dashboard";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <Router>
        <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard/>
            </Route>
        </Switch> 
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
