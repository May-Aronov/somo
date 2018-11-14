import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Search from "./components/search"
import Home from "./components/Home"
import addReview from "./components/addReview"

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="Linkim">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/addReview">Add Review</Link></li>

            </ul>
          </div>
          <Route path="/search" exact component={Search} />
          <Route path="/addReview" exact component={addReview} />
          <Route path="/Home" exact component={Home} />

        </div>
      </Router>
      
      
    );
  }
}

export default App;
