import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile';
import Main from './main';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render(){

    return (
      <Router>
        <div>
          <Route exact path="/" component={Main}/>
          <Route exact path="/profile/:nameParam" component={Profile}/>
        </div>
      </Router>
    );
  }

}

export default App;