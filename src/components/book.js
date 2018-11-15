import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEdit } from '@fortawesome/free-solid-svg-icons'
library.add(faEdit);
const axios = require('axios')

class ResultBook extends Component {

    @observable data = null
    componentDidMount = async () => {
        let dataApi = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.props.match.params.urlid}`)
        this.data = dataApi.data
    }

    render() {
        let product = this.props.store.products[this.props.match.params.index]
        if (this.data) {
            return (
        return (
            <div className="container-book"class="text-center">
                <div className="name-book">
                    <h1 id="bookTitle">NEW BOOK</h1>
                </div>
                <div className="img-book">
                    <img id="bookImage"src="https://cdn-images-1.medium.com/max/1024/1*OQXqTrTpXynrt85LeuaCnA.jpeg" width="250" height="250" />
                </div>
<div id="detailsBook">
                <div className="publish-book">
                    <h3>PublishDate:</h3><p>22/11/2018</p>
                </div>
                <div className="author-book">
                    <h3>Author:</h3><p>Or Hirak</p>
                </div>
                <div className="description-book">
                    <h3>Details:</h3>
                    <p>asdasdasdadasdadadasdasdadasasd!!</p>
                </div>
               
            </div>
            <div className="reviews-movie">
            <h2 id="bookReview">Reviews  <FontAwesomeIcon icon="edit" size="1x" /> </h2>
            </div>
            </div>

        );
    }
}

export default ResultBook;