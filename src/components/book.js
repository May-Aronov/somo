import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import AddFollow from "./AddFollow";
import Loader from "./Loader"
library.add( faEdit);
const axios = require('axios')
@inject("store")
@observer
class ResultBook extends Component {
    @observable data = null
    @observable product = null


    componentDidMount = async () => {
        let dataApi = await axios.get(`https://www.googleapis.com/books/v1/volumes/${this.props.match.params.urlid}`)
        this.data = dataApi.data.volumeInfo
        this.product = await this.props.store.getReviewproduct(this.props.match.params.urlid)
        console.log(this.product, this.data )
    }

    render() {
        // let product = this.props.store.products[this.props.match.params.index]
        if (this.data && this.product) {
            return (

                <div className="container-book" class="text-center">
                <div id="name-Img">
                    <div className="name-book">
                        <h1 id="bookTitle">{this.data.title}</h1>
                    </div>
                    <div className="img-book">
                        <img id="bookImage" src={this.data.imageLinks.smallThumbnail} width="250" height="250" />
                    </div>
                </div>
                    <div id="detailsBook">
                        <div className="publish-book">
                            <h3>PublishDate:</h3><p>{this.data.publishedDate}</p>
                        </div>
                        <div className="author-book">
                            <h3>Author:</h3>
                            {this.data.authors.map((a) => {
                                return <li>{a}</li>
                            })}
                        </div>
                        <div className="description-book">
                            <h3>Details:</h3>
                            <p>{this.data.description}</p>
                        </div>

                    </div>


                    <h2 id="bookReview" >Reviews:  <FontAwesomeIcon icon="edit" size="1x" /> </h2>
                    
        


                    <div className="reviews-movie">
                    <h2 id="bookReview" >Reviews:  <FontAwesomeIcon icon="edit" size="1x" /> </h2>
                        {this.product.reviews.map((r) => {
                            return <div>
                                {r.user.id == this.props.store.CurrentUser.id ? null:<AddFollow props favoriteid={r.user.id}/>}
                                <span>{r.user ? r.user.name : null}</span> -  <span>{r.text}</span>
                            </div>
                        })}
                    </div>

                </div>
            )
        }
        else {
            return (<Loader />)
        }
    }
}

export default ResultBook;