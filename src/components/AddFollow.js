import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";


@inject("store")
@observer
class AddFollow extends Component {
  @observable data = null


  userfollowes= (favorites,favoriteid) => {
    for(let favorite of favorites){
      if(favorite.id == favoriteid){
        return true
      }
    }
    return false
  }

  addFavorite = (favoriteid) => {
    // alert("dfgdfg")
      this.props.store.addFavorite(favoriteid)
  }



  render() {
    return (
      <span>
        {this.userfollowes(this.props.store.CurrentUser.favorite,this.props.favoriteid) ? <button class= "btn btn-blue btn1" type="button">following</button> :
        
        <button onClick={()=>this.addFavorite(this.props.favoriteid)} class= "btn btn-green btn2 " id="right-btn" type="button">follow</button>
        } </span>      
    );
  }
}

export default AddFollow;