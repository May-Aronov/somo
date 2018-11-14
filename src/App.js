import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Search from "./components/search"
import Home from "./components/Home"
import addReview from "./components/addReview"
import book from "./components/book"
import movie from "./components/movie"
import signUp from "./components/signUp"

import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
library.add(faUsers);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="Linkim">
            <ul class="AppUl">
              <li class="AppLi"><Link to="/home">Home</Link></li>
              <li class="AppLi"><Link to="/search">Search</Link></li>
              <li class="AppLi"><Link to="/addReview">Add Review</Link></li>
              <li class="AppLi"><Link to="/book">book</Link></li>
              <li class="AppLi"><Link to="/movie">movie</Link></li>
              <li class="AppLi"><Link to="/signUp">signUp</Link></li>

              <li id="SOMO">S O M O<br /><FontAwesomeIcon icon="users" size="2x" color="#blue"/></li>
              
            </ul>
          </div>

          <Route path="/search" exact component={Search} />
          <Route path="/addReview" exact component={addReview} />
          <Route path="/Home" exact component={Home} />
          <Route path="/book" exact component={book} />
          <Route path="/movie" exact component={movie} />
          <Route path="/signUp" exact component={signUp} />

        </div>
      </Router>
      
      
    );
  }
}


export default App;
