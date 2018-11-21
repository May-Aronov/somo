import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons';

library.add(faComments);

@inject("store")
@observer
class Post extends Component {

  render() {
      console.log(this.props.user)
      let i =this.props.i
      let product=this.props.user.product
    return (
      // <div className="post text-center" >
      // <h6>{this.props.user.date}</h6>
      // <Link to to={product.type == "movie" ? `/movie/${product.id}/${product.urlid}` : `/book/${product.id}/${product.urlid}`} >
      // <img className="postimg" src={product.imgurl}></img>
      // </Link>
      // <div className="postext"><h4><img className="userimgnav" src= {this.props.user.user.imgUrl}></img>{this.props.user.user.name}:</h4>  {this.props.user.text}</div>
      // </div>

 
  <div className="w3-container  w3-card-4 w3-white w3-round w3-margin postcard"><br />
    <img src={this.props.user.user.imgUrl} id="Avatar" alt="Avatar" className="w3-left w3-circle w3-margin-right" />

    <span className="w3-right w3-opacity">{this.props.user.date} - {this.props.user.time}</span> 
    <div className="w3-right w3-opacity"> </div>
    <h4>{this.props.user.user.name}</h4><br />
    <hr className="w3-clear" />
   
    <div className="w3-row-padding"  >
      <div className="w3-half">
        <img src={product.imgurl} alt="productPhoto" className="w3-margin-bottom postimg productPhoto" />
      </div>
      <div className="w3-half">
      <p>{this.props.user.text}</p>
      </div>
    </div> 

    <button type="button" id="comment" className="w3-button w3-theme-d2 w3-margin-bottom  "> <FontAwesomeIcon icon="comments"  color="white" /> Chat</button>
  </div>

    );
  }
}
export default Post;
