import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import TopP from './TopP'
import Loader from './Loader'
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
    @observable hashtag = null
    @observable loader = false
    @observable popularProduct =[]



    componentDidMount = async () => {
        try {
            let popularProducts = await this.props.store.getpopular()
            popularProducts=popularProducts.splice(0,5)
            this.popularProduct= popularProducts
            console.log( this.popularProduct)
        }
        catch (error) {
            console.log(error)
        }
    }


    hashtagClick = (name) => {
        console.log(name)
        this.SearchText = name
        this.FilterName = 'hashtags'
        this.props.store.filterReview(this.SearchText, this.FilterName)
    }

    handleChange = async (e) => {
        this[e.target.name] = e.target.value
        await this.props.store.filterReview(this.SearchText, this.FilterName)
    }

    ChangeHashtag = (e) => {
        this.hashtag = e.target.value
    }

    submitHashtag = (movieId, movieindex) => {
        this.props.store.AddHashtag(this.hashtag, movieId, movieindex)
    }

    hashtagModel = () => {
        this.openmodel = !this.openmodel
        console.log(this.openmodel)
    }

    renderProducts = () => {
        if (!this.props.store.CurrentUser) {
            this.props.history.push("/home");
            alert("u need to sign in or signup");
        }
        if (this.SearchText) {
            return this.props.store.products.map((p, i) => {

                return (
                    <div className="card" onClick={() => { this.product = p }}>
                        <div onClick={this.hashtagModel} > Add hashtag <FontAwesomeIcon icon="plus-circle" size="2x" className="add-hashtag-icon" /></div>
                        {this.openmodel &&
                            <div className="form-popup">
                                <form className="form-container" id="myForm" >
                                    <label name="hashtag"><b>hashtag</b></label>
                                    <input value={this.hashtag} onChange={this.ChangeHashtag} type="text" placeholder="Enter hashtag" name="hashtag" required />
                                    <button onClick={() => this.submitHashtag(p.id, i)} type="button" className="btn">Add</button>
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
                                        return (<span id="hashtag" name={h.name} onClick={() => this.hashtagClick(h.name)} > {'#' + h.name}  </span>)
                                    })
                                }
                            </p>
                        </div>
                    </div>
                )

            })
        }
        else {
            return <div></div>
        }
    }

    gettop=()=>{
      return  this.popularProduct.map((p)=>{
          console.log(p)
         return  <TopP product={p}/>
        })
    }
    render() {
        // if(!this.props.store.CurrentUser){
        //     alert("u need to sign in or signup")
        //     return <Redirect to='/home' />
        // }
        // if(!this.props.store.CurrentUser){
        //     this.props.history.push("/home");
        //     alert("u need to sign in or signup");
        //   }
        if (this.loader) {
            return <Loader />
        }
        return (
            <div className="text-center boxx " >

            <div id="container-search-top">
                <div className="w3-col l4" id="top-prod">
                    <div className="w3-card ">
                        <div className="w3-container w3-padding" id="pop-title">
                            <h4>Popular Products</h4>
                        </div>
                        <ul className="w3-ul w3-hoverable w3-white">
                            {this.gettop()}
                        </ul>
                    </div>
                </div>


                <div className="inputSearch " >
                <form className="searchComponent">
                    <h2 id="search">Search your reviews</h2>
                    <div id="yourReview">
                        <h2 className="searchTitle"></h2>
                        <div id="text-s">Choose whatever you whant to search:movie,book, hashtag..
                            <p>And search! </p>
                        </div>
                        <input name="SearchText" type="text" value={this.SearchText} onChange={this.handleChange} id="searchText" className="form-control" type="text" />
                        <br></br>
                        <select className="searchInput" className="btn btn-dark searchSelect" name='FilterName' value={this.FilterName} onChange={this.handleChange}>
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
                        </div>
                    </div>
                    </form>
                </div>

            </div> 
                <div className="SerchResultContainer">
                    {this.props.store.products.length>0 ? this.renderProducts() : <Loader />}
                </div>
            </div>
        )
    }
}

export default Search;

