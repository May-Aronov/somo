import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import ResultMovie from './Result-movie';
import ResultBook from './Result-Book';



@inject("store")
@observer
class Serch extends Component {

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
    // handleProductClick = () => {
    //     if (this.product) {
    //         let product = this.product
    //         if (product.type == "movie") {
    //             return <ResultMovie urlid={product.urlid} reviews={product.reviews} />
    //         }
    //         else {
    //             return <ResultBook urlid={product.urlid} reviews={product.reviews} />
    //         }
    //     }
    // }
    render() {

        return (
            // <Router>
                
            <div>
                <h2>search</h2>
                <input name="SearchText" type="text" value={this.SearchText} onChange={this.handleChange} />
                {/* <select name='FilterName' value={this.props.FilterName} onChange={this.handleChange}>
                 <option value='movie'>movie</option>
                 <option value='book'>book</option>
             </select> */}
                <div>
                    {this.props.store.products ? this.renderProducts() : null}
                    {/* {this.handleProductClick()} */}
                </div>
            </div>
        )

    }
}

export default Serch;

