import React, { Component } from 'react';
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
    handleChange = (e) => {
        this.SearchText = e.target.value
        this.props.store.filterReview(this.SearchText)
    }

    renderProducts = () => {
        return this.props.store.products.map((p,i) => {
            return (
                <div>
                  
                        <div onClick={() => { this.product = p }}>
                            <h1>{p.name}</h1>
                            <Link to={p.type = "movie" ? `/movie/${i}/${p.urlid}` : `/book/${i}/${p.urlid}` }>
                            <img src={p.imgurl} />
                            </Link >
                        </div>
                
                </div>
            )
        })
    }

  
    render() {

        return (
                
            <div>
                <h2>search</h2>
                <input name="SearchText" type="text" value={this.SearchText} onChange={this.handleChange} />
                {/* <select name='FilterName' value={this.props.FilterName} onChange={this.handleChange}>
                 <option value='movie'>movie</option>
                 <option value='book'>book</option>
             </select> */}
                <div>
                    {this.props.store.products ? this.renderProducts() : null}
                </div>
            </div>
        )

    }
}

export default Search;

