
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import ResultBook from './components/Result-Book'
import ResultMovie from './components/Result-movie'
import './App.css';

import Search from './components/Search';
import AddReview from './components/AddReview';
import Home from "./components/Home"




@inject("store")
@observer
class App extends Component {
  render() {
    return(
    <Router>
      <div className="App">
        <div className="Linkim">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/addReview">Add Review</Link></li>
          </ul>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
        <Route path="/addReview" exact component={AddReview} />
        <Route path="/Home" exact component={Home} />
        <Route path="/movie/:index/:urlid" exact  render={({ match }) => <ResultMovie match={match} /> }/>
        <Route path="/book/:index/:urlid" exact  render={({ match }) => <ResultBook match={match} /> }/>
      </div>
    </Router>
    )
  }
}


// return <ResultMovie urlid={product.urlid} reviews={product.reviews} />
// return <ResultBook urlid={product.urlid} reviews={product.reviews} />


export default App;