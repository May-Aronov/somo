import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import { faComment } from '@fortawesome/free-solid-svg-icons';
import '../Loader.css';
library.add(faComment);

@observer
class Feed extends Component {

  render() {
    return (
      <div className="w3-theme-l5">
        <div className="w3-col m7">
          <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
            <img src=""  id="Avatar" alt="Avatar" className="w3-left w3-circle w3-margin-right"/>
            <span className="w3-right w3-opacity">1 min</span>
            <h4>John Doe</h4><br />
            <hr className="w3-clear" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="w3-row-padding"  >
              <div className="w3-half">
                <img src=""  alt="productPhoto"className="w3-margin-bottom  productPhoto"/>
              </div>
             
            </div>
            <button type="button" id="comment" className="w3-button w3-theme-d2 w3-margin-bottom  "><i className="fa fa-comment"></i> Chat</button>
          </div>
        </div >
      </div>
    );
  }
}

export default Feed;
