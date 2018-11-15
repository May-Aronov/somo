import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
// import ResultMovie from './Result-movie';
// import ResultBook from './Result-Book';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'


library.add(faHashtag);

@inject("store")
@observer
class Search extends Component {

    @observable SearchText = ""

    @observable product = ""
    handleChange = (e) => {
        this.SearchText = e.target.value
        this.props.store.filterReview(this.SearchText)
    }

    renderProducts = () => {
        return this.props.store.products.map((p, i) => {
            return (
                <div>

                    <div onClick={() => { this.product = p }}>
                        <h1>{p.name}</h1>
                        <Link to={p.type = "movie" ? `/movie/${i}/${p.urlid}` : `/book/${i}/${p.urlid}`}>
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
                    
                    {/* <select class="btn btn-dark">
       <option>Select</option>
         <option>Movie</option>
         <option>Book</option>
         </select> */}
        
                    <div>
                        <h2 id="yourReview">search</h2>
                        <input name="SearchText" type="text" value={this.SearchText} onChange={this.handleChange} id="text1" class="form-control" type="text" />
                        {/* <select name='FilterName' value={this.props.FilterName} onChange={this.handleChange}>
                 <option value='movie'>movie</option>
                 <option value='book'>book</option>
             </select> */}
                        <div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div class="wrapper">
                                <span class="fa-stack ">      <FontAwesomeIcon icon="hashtag" size="10x" />
                                </span>
                            </div>


                            {this.props.store.products ? this.renderProducts() : null}
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Search;

