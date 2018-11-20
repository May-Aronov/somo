import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Link, Route, Redirect, withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";


@inject("store")
@observer
class Login extends Component {
  @observable user = null

  handleChange = (e) => {
    this.user = e.target.value
  }

  onsubmit = async () => {
    if (this.user) {
      await this.props.store.getUser(this.user)
      if(this.props.store.CurrentUser){
        this.props.history.push("/search");
      }
    }
    else {
      alert("missing details")
    }
  }

render() {

    return ( <div className="Login">
<h4 class="text-center" id="o">Username:</h4>
        <input name="user" value={this.user} onChange={this.handleChange} class="form-control" id="ex1" type="text" />
        {/* <h4 class="text-center" id="o">Password:</h4>

        <input class="form-control" id="ex1" type="text" /> */}
        <br></br>
        {/* <Link to="/search">  */}
        <button type="button" onClick={this.onsubmit} class="btn btn-dark">Log In</button>
        {/* </Link> */}
        {/* {
          !this.props.store.CurrentUser &&
          <p className="error">Login failed</p>
        } */}
        <h3 class="text-center" id="o">Don't have an account yet? <Link to="/signUp">signup</Link></h3>
        </div>
    )
    }
}

export default Login;