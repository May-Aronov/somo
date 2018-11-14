import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle , faCheckCircle} from '@fortawesome/free-solid-svg-icons'
library.add(faPlusCircle, faCheckCircle);

class addReview extends Component {

  @observable user = {
    userName: "",
    productType: "",
    productName: "",
    reviewText: ""
    //    hashtags:[]
};

@action inputChange = (e) => {
    this.user[e.target.name] = e.target.value

}
submitForm = () => {
    this.user.userName.toLowerCase();
    this.user.productType.toLowerCase();
    this.user.productName.toLowerCase();
    // let user= {
    //     productName:this.user.productName,
    //     productType:this.user.productType,
    //     userName:this.user.userName,
    //     reviewText:this.user.reviewText
    // }
    this.props.store.addReview(this.user)
    this.user.productType= "";
    this.user.productName= "";
    this.user.userName= "";
    this.user.reviewText= "";

}



  render() {
    return (
      <div className="addReview" class="text-center">
      <h1><p class="add">ADD NEW REVIEW</p></h1>
      <br></br>
        <select name="productType" onChange={this.inputChange} value={this.user.productType} class="btn btn-dark">
        <option>Select</option>

          <option>Movie</option>
          <option>Book</option>

        </select>
          <br></br>
          <br></br>

        <input name="productName" onChange={this.inputChange} value={this.user.productName}  class="form-control" id="text1" type="text" />
        <h2 id="yourProduct"> Product name:</h2>

        <br></br>
        <button onclick={this.find} class="btn btn-dark">Check if Movie Exist  <FontAwesomeIcon icon="check-circle" size="2x"/></button>
        <br></br>
       <h2 id="yourReview"> Your Review:</h2>
        <textarea name="reviewText" onChange={this.inputChange} value={this.user.reviewText} class="form-control" id="ex2"  rows="8.5" cols="60"></textarea>
     {/* <h2 id="yourHashtags">   Hashtags:</h2>
        <input class="form-control" id="ex3" type="text" />
        <button class="btn btn-dark"><FontAwesomeIcon icon="plus-circle" size="2x"/></button> */}
        <br></br>
        <button class="btn btn-dark" id="buttonAdd">ADD</button>



        <br />
      </div>
    );
  }
}

export default addReview;