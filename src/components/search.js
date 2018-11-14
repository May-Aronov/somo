import React, { Component } from 'react';


class Search extends Component {
  render() {
    return (
      <div className="Search">
        <div className="inputSearch">
          <input  type="text" />
          <input  type="checkbox"/>Movie
          <input  type="checkbox"/>Book
          <br />
          <button class="btn btn-dark">Find</button>
        </div>
      </div>
      
    );
  }
}

export default Search;