import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";


class Poptag extends Component {

    hashtagClick=()=>{
        this.props.hashtagClick(this.props.tag.name)
    }

  render() {
   let tag=this.props.tag
    return (      
        <span className="w3-tag w3-light-grey w3-small w3-margin-bottom space"  onClick={ this.hashtagClick}>  
          {tag.name} 
           </span>  
    );
  }

}

export default  Poptag;