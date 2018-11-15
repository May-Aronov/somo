
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import Search from "./components/search"
import Home from "./components/Home"
import AddReview from "./components/addReview"
import ResultBook from "./components/book"
import ResultMovie from "./components/movie"
import signUp from "./components/signUp"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import './App.css';

// import ResultBook from './components/Result-Book'
// import ResultMovie from './components/Result-movie'
library.add(faUsers);
@inject("store")
@observer
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
              {/* <li class="AppLi"><Link to="/book">book</Link></li>
              <li class="AppLi"><Link to="/movie">movie</Link></li> */}
              <li class="AppLi"><Link to="/signUp">signUp</Link></li>

              <li id="SOMO">S O M O<br /><FontAwesomeIcon icon="users" size="2x" color="#blue"/></li>
              
            </ul>
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/addReview" exact component={AddReview} />
          <Route path="/Home" exact component={Home} />       
          <Route path="/movie/:index/:urlid" exact  render={({ match }) => <ResultMovie match={match} /> }/>
          <Route path="/book/:index/:urlid" exact  render={({ match }) => <ResultBook match={match} /> }/>
          <Route path="/signUp" exact component={signUp} />

        </div>
      </Router>
      
      
    );
  }
}


// return <ResultMovie urlid={product.urlid} reviews={product.reviews} />
// return <ResultBook urlid={product.urlid} reviews={product.reviews} />


export default App;
