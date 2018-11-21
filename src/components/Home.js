import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Link, Route, Redirect, withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import Loader from "./Loader"


@inject("store")
@observer
class Home extends Component {
  @observable user = null
  @observable loader = false
  



  handleChange = (e) => {
    this.user = e.target.value
  }


  @action onsubmit = async () => {
    if (this.user) {
      this.loader=true
      await this.props.store.getUser(this.user)
      this.loader=false
      if(this.props.store.CurrentUser){
        this.props.history.push("/search");
      }
    }
    else {
      alert("missing details")
    }
  }

  //   async componentWillReact() {
  //     if(this.props.store.CurrentUser) {
  //         history.push('/search')
  //     }
  // }

  render() {


    return (
      <div className="Home"  >
      <div className="home-left">
        <h3 id="p">What's Your Fav?</h3>
        
          <h3 id="p" >Want to expand your knowledge <br></br>
          about your fav book and movies?<br></br>

          Check out our site, <br></br>
          which allows you to search your product,
          <br></br> reccommed about it, and even add HASHTAGS!

          </h3>
          <div class="ofri"><h3>Hope you'll enjoy browsering our site!</h3>
            <span class="tooltiptext"><h4>You can start your browsering at the search link above :)</h4></span>
          </div>
        
        </div>
        <form className= "LoginForm">
        <br></br>
        <div className="Login">
        <h3 id="LoginTitle" class="text-center">Login</h3>
<br></br>
<h4 class="text-center" id="o">Username:</h4>
        <input name="user" value={this.user} onChange={this.handleChange} class="form-control" id="ex12" type="text" />
        {this.loader ? <Loader />: null}
        <br></br>
        {/* <Link to="/search">  */}
        <button  type="button" onClick={this.onsubmit} class="btn btn-dark theLogInButton" >Log In</button>
        {/* </Link> */}
        {/* {
          !this.props.store.CurrentUser &&
          <p className="error">Login failed</p>
        } */}
        <h3 class="text-center" id="o">Don't have an account yet? <Link to="/signUp">signup</Link></h3>
        </div>
        
</form>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
<div class="container">

{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Open modal
</button> */}

{/* <div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
    
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      
      <div class="modal-body">
        Modal body..
      </div>
      
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
      
    </div>
  </div>
</div> */}

</div>


      </div>
    );
  }
}
export default Home;