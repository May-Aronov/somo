import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
library.add(faHashtag);

class Search extends Component {
  render() {
    return (
      <div  className="Search" class="text-center">
        <div className="inputSearch">
        <h1 id="search">SEARCH YOUR HASHTAG</h1>
       <br></br>
        <select class="btn btn-dark">
        <option>Select</option>
          <option>Movie</option>
          <option>Book</option>
          </select>
          <br></br>
          <br></br>
          <input id="text1"  class="form-control" type="text" />
          <br></br>
          <button class="btn btn-dark">Find</button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div class="wrapper">
          <span class="fa-stack ">      <FontAwesomeIcon icon="hashtag" size="10x" />
                   </span></div>

        </div>
        
      </div>
    )
    }
  }
      export default Search;