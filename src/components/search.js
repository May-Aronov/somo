import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
library.add(faHashtag);
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import ResultMovie from './Result-movie';
import ResultBook from './Result-Book';



@inject("store")
@observer
class Search extends Component {
  
  @observable SearchText = ""
  @observable product = ""
  // this.props.store.products
  handleChange = (e) => {
    this.SearchText = e.target.value
    this.props.store.filterReview(this.SearchText)
  }
  renderProducts = () => {
    return this.props.store.products.map((p) => {
      return (
        <div>
          <div onClick={() => { this.product = p }}>
            <h1>{p.name}</h1>
            <Link to={p.type = "movie" ? "/movie" : "/book"}>
              <img src={p.imgurl} />
            </Link >
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="Search" class="text-center">
        <div className="inputSearch">
          <h1 id="search">SEARCH YOUR REVIEWS</h1>
          <br></br>
          {/* <select class="btn btn-dark">
        <option>Select</option>
          <option>Movie</option>
          <option>Book</option>
          </select> */}
          <br></br>
          <br></br>
          <input name="SearchText" type="text" value={this.SearchText} onChange={this.handleChange} id="text1" class="form-control" type="text" />
          <br></br>
          <button class="btn btn-dark">Find</button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div class="wrapper">
            <span class="fa-stack ">      <FontAwesomeIcon icon="hashtag" size="10x" />
            </span></div>

          <div>
            {this.props.store.products ? this.renderProducts() : null}
            {/* {this.handleProductClick()} */}
          </div>
        </div>

      </div>
    )
  }
}
export default Search;