import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";


@inject("store")
@observer
class signUp extends Component {
  @observable user={UserName:"" ,img :""}

  handleChange = (e) => {
    this.user[e.target.name] = e.target.value
  
  }


  onsubmit = () => {
    console.log(this.user)
    if(this.user.UserName && this.user.img )
    this.props.store.addUser(this.user) 
    else{
      alert("missing details")
    }   
  }

   
    render() {
      return (
        <div className="Search" class="text-center">
          <div className="inputSearch">
            <h1 id="search">SIGN UP</h1>
            <h3 class="text-center" id="sign">Username:</h3>
            <input  name="UserName" value={this.user.UserName} onChange={this.handleChange} id="text1" class="form-control" type="text" />
            <h1 id="search">image profile</h1>
            <input  name="img"  value={this.user.img} onChange={this.handleChange} id="text1" class="form-control" type="text" />
            <br></br>
            <button type="sumbit"  onClick={this.onsubmit}class="btn btn-dark">sign-up</button>
          </div>

        </div>
      )
    }
  }
  export default signUp;