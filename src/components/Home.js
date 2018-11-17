import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";


@inject("store")
@observer
class Home extends Component {
  @observable user=null

  handleChange = (e) => {
    this.user = e.target.value
  }


  onsubmit = () => {
    if(this.user)
    this.props.store.getUser(this.user) 
    else{
      alert("missing details")
    }   
  }
  render() {
    return (
      <div className="Home" class="text-center" >

        <h1 id="home" class="text-center">WHAT'S YOUR FAV?</h1>
        <form id="P">
          <h3 id="p">Want to expand your knowledge about your fav book and movies?
   
          <h3 id="p">Check out our site, which allows you to search your product, reccommed about it, and even add HASHTAGS!</h3>

          </h3>
          <div class="ofri"><h3>Hope you'll enjoy browsering our site!</h3>
            <span class="tooltiptext"><h4>You can start your browsering at the search link above :)</h4></span>
          </div>
        </form>
        <br></br>
        <h4 class="text-center" id="o">Username:</h4>
        <input name="user"  value={this.user} onChange={this.handleChange} class="form-control" id="ex1" type="text" />
        {/* <h4 class="text-center" id="o">Password:</h4>

        <input class="form-control" id="ex1" type="text" /> */}
        <br></br>
        <button  type="sumbit"  onClick={this.onsubmit} class="btn btn-dark">Log In</button>

        <h3 class="text-center" id="o">Don't have an account yet? <Link to="/signUp">signup</Link></h3>

      </div>
    );
  }
}
export default Home;