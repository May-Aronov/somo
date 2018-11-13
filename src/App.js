import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="Linkim">
            <ul>
              <li><Link to="/addReview">AddReview</Link></li>
              <li><Link to="/search">Search</Link></li>


            </ul>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
