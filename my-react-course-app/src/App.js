import React, { Component } from 'react';
import './App.css';
import LoginForm from './containers/LoginForm';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cinemas from './containers/Cinemas';
import Movies from './containers/Movies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/cinemas" component={Cinemas} />
            <Route exact path="/movies" component={Movies} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
