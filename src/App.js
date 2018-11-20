
import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Link, Route, Redirect, withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import Search from "./components/search"
import Home from "./components/Home"
import Feed from "./components/Feed"
import AddReview from "./components/addReview"
import ResultBook from "./components/book"
import ResultMovie from "./components/movie"
import signUp from "./components/signUp"
import Feed from "./components/feed"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import './App.css';



library.add(faUsers);
@inject("store")
@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this)
}
  logout () {
        this.props.store.logout()
  
  }


  render() {

    return (
      <Router>
      

        <div className="App">
      
          <div className="Linkim">
            <ul className="AppUl">
              <li className="AppLi"><Link to="/home">Home</Link></li>
              <li className="AppLi"><Link to="/search">Search</Link></li>
              <li className="AppLi"><Link to="/addReview">Add Review</Link></li>
              <li className="AppLi"><Link to="/signUp">signUp</Link></li>
              <li className="AppLi"><Link to="/feed">feed</Link></li>
            
              
              {this.props.store.CurrentUser && 
                  <li className="AppLi user" onClick={this.logout}> 
               <p > User:  <img className="userimgnav" src={this.props.store.CurrentUser.imgUrl} alt=""/>- {this.props.store.CurrentUser.name} </p>
                </li>}

              <li id="SOMO">S O M O<br /><FontAwesomeIcon icon="users" size="2x" color="#blue" /></li>
            </ul>
          </div>
          <Route path="/feed" exact component={Feed} />
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/addReview" exact component={AddReview} />
          <Route path="/home" exact component={Home} />
          <Route path="/movie/:index/:urlid" exact render={({ match }) => <ResultMovie match={match} />} />
          <Route path="/book/:index/:urlid" exact render={({ match }) => <ResultBook match={match} />} />
          <Route path="/signUp" exact component={signUp} />
          <Route path="/feed" exact component={Feed} />
          
        </div>
      </Router>


    );
  }
}



export default App;
