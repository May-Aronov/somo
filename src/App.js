
import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import ResultBook from './components/Result-Book'
import ResultMovie from './components/Result-movie'
import './App.css';
import Search from './components/Search';
import AddReview from './components/AddReview';



@inject("store")
@observer
class App extends Component {
  render() {
      return (
        <Router>
       <div>
        <div className='main-container'>
          <AddReview />
          <Search />
        </div>
        {/* <Route exact path='/' component={landing} /> */}
        <Route path="/movie" exact component={ResultMovie} /> 
      </div>
    </Router>
    );
  }
}




export default App;