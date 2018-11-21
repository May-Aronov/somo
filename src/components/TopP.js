import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";


class TopP extends Component {


  render() {
   let product=this.props.product
    return (   
      <Link to={product.type == "movie" ? `/movie/${product.urlid}` : `/book/${product.urlid}`}>
        <li className="w3-padding-16 ">
          <img src={product.imgurl} alt="Image" className="w3-left w3-margin-right popular-img"/>
          <br/>
          <span className="w3-large" id="popular-p">{product.name}</span><br/>
          <span>         </span>     
        </li>
          </Link >


    );
  }
}

export default TopP;