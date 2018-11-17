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

    hashtagClick=(name)=>{
        console.log(name)
      this.SearchText=name
      this.FilterName = 'hashtags'
      this.props.store.filterReview(this.SearchText, this.FilterName)
    }

    handleChange = (e) => {
        this[e.target.name] = e.target.value
        this.props.store.filterReview(this.SearchText, this.FilterName)
    }
    onsubmit=()=>{
           
    }

    renderProducts = () => {
        return this.props.store.products.map((p, i) => {
            console.log(p)
            return (
                
                    <div className="card" onClick={() => { this.product = p }}>
                    <Link to={p.type = "movie" ? `/movie/${i}/${p.urlid}` : `/book/${i}/${p.urlid}`}>
                        <img className="imgsearch" src={p.imgurl} alt="proudct img" />
                        </Link >
                        <div className="cardetails">
                            <h1><b>{p.name}</b></h1>
                            <p>
                                {
                                    p.hashtags.map((h) => {
                                        return (<span name={h.name}  onClick={()=>this.hashtagClick(h.name)} > {'#'+h.name}  </span>)
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

