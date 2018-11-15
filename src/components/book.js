import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEdit } from '@fortawesome/free-solid-svg-icons'
library.add(faEdit);
const axios = require('axios')

class ResultBook extends Component {

    @observable data = null
    componentDidMount = async () => {https://www.googleapis.com/books/v1/volumes/XNiDPgAACAAJ
        let dataApi = await axios.get(`https://www.googleapis.com/books/v1/volumes/${this.props.match.params.urlid}`)
        this.data = dataApi.data
    }

    render() {
        let product = this.props.store.products[this.props.match.params.index]
        if (this.data) {
            return (
        
            <div className="container-book"class="text-center">
                <div className="name-book">
                    <h1 id="bookTitle">{this.data.title}</h1>
                </div>
                <div className="img-book">
                    <img id="bookImage"src={this.data.imageLinks.smallThumbnail} width="250" height="250" />
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
            <div className="reviews-movie">
            
            <h2 id="bookReview" >Reviews:  <FontAwesomeIcon icon="edit" size="1x" /> </h2>{product.reviews.map((r) => {
                            return <p>{r.text}</p>
                        })}
            </div>
            </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
}

export default ResultBook;