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

    @observable SearchText = null
    @observable FilterName = "movie"
    @observable openmodel = false
    @observable hashtag=null

    hashtagClick = (name) => {
        console.log(name)
        this.SearchText = name
        this.FilterName = 'hashtags'
        this.props.store.filterReview(this.SearchText, this.FilterName)
    }

    handleChange = (e) => {
        this[e.target.name] = e.target.value
        this.props.store.filterReview(this.SearchText, this.FilterName)
    }
    ChangeHashtag = (e) => {
        this.hashtag = e.target.value
    }
    submitHashtag=(movieId,movieindex) =>{
    this.props.store.AddHashtag(this.hashtag, movieId,movieindex)
    }
    hashtagModel = () => {
        this.openmodel = !this.openmodel
        console.log(this.openmodel)
    }

    renderProducts = () => {
        return this.props.store.products.map((p, i) => {
            console.log(p.type)
            return (
                <div className="card" onClick={() => { this.product = p }}>
                    <div onClick={this.hashtagModel} > <FontAwesomeIcon icon="plus-circle" size="2x" /></div>
                    {this.openmodel &&
                        <div className="form-popup">
                        
                            <form className="form-container" id="myForm" >
                                <label name="hashtag"><b>hashtag</b></label>
                                <input value={this.hashtag} onChange={this.ChangeHashtag} type="text" placeholder="Enter hashtag" name="hashtag" required />
                                <button onClick={()=> this.submitHashtag(p.id,i)} type="submit" className="btn">Add</button>
                                <button type="button" className="btn cancel" onClick={this.hashtagModel}>Close</button>
                            </form>
                        </div>}
                    <Link to={p.type == "movie" ? `/movie/${i}/${p.urlid}` : `/book/${i}/${p.urlid}`}>
                        <img className="imgsearch" src={p.imgurl} alt="proudct img" />
                    </Link >
                    <div className="cardetails">
                        <h1><b>{p.name}</b></h1>
                        <span className="ReviewCount">{p.reviews.length} reviews </span>
                        <p>
                            {
                                p.hashtags.map((h) => {
                                    return (<span name={h.name} onClick={() => this.hashtagClick(h.name)} > {'#' + h.name}  </span>)
                                })
                            }
                        </p>
                    </div>
                </div>
            )
        })
    }


    render() {
        return (
            <div className="Search" className="text-center">
                <div className="inputSearch">
                    <h1 id="search">SEARCH YOUR REVIEWS</h1>
                    <div>
                        <h2 id="yourReview">search</h2>
                        <input name="SearchText" type="text" value={this.SearchText} onChange={this.handleChange} id="text1" className="form-control" type="text" />
                        <select name='FilterName' value={this.FilterName} onChange={this.handleChange}>
                            <option value='movie'>movie</option>
                            <option value='book'>book</option>
                            <option value='hashtags'>hashtags</option>
                        </select>
                        {/* <button  type="sumbit"   class="btn btn-dark" id="buttonAdd" onClick={this.onsubmit}>search</button> */}
                        <div>
                            {/* <div className="wrapper">
                                <span className="fa-stack ">      <FontAwesomeIcon icon="hashtag" size="10x" />
                                </span>
                            </div> */}
                            <div className="SerchResultContainer">
                                {this.props.store.products ? this.renderProducts() : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;

