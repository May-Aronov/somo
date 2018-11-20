import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import { BrowserRouter as Router, Link } from 'react-router-dom'


@inject("store")
@observer
class Post extends Component {

  render() {
      console.log(this.props.user)
      let i =this.props.i
      let product=this.props.user.product
    return (
      <div className="post text-center" >
      <h6>{this.props.user.date}</h6>
      <Link to to={product.type == "movie" ? `/movie/${product.id}/${product.urlid}` : `/book/${product.id}/${product.urlid}`} >
      <img className="postimg" src={product.imgurl}></img>
      </Link>
      <div className="postext"><h4><img className="userimgnav" src= {this.props.user.user.imgUrl}></img>{this.props.user.user.name}:</h4>  {this.props.user.text}</div>
      </div>
    );
  }
}
export default Post;