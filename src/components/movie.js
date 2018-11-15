import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEdit } from '@fortawesome/free-solid-svg-icons'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
library.add(faStar, faEdit);
const axios = require('axios')

@inject("store")
@observer
class ResultMovie extends Component {
    @observable data = null


    componentDidMount = async () => {
        let dataApi = await axios.get(`http://www.omdbapi.com/?apikey=9bededde&t=${this.props.match.params.urlid}`)
        this.data = dataApi.data
    }

    render() {
        let product = this.props.store.products[this.props.match.params.index]
        if (this.data) {
            return (
                <div className="container-movie text-center">
                    <div className="nameMovie">
                        <h1 id="movieTitle">{this.data.title}</h1>
                    </div>
                    <div className="img-movie">
                        <img id="movieImage" src={this.data.Poster} width="250" height="250" />
                    </div>
                    <div class="hover14 column">

                    </div>
                    <div id="detailsMovie" className="details-movie">
                        <h3> Year:</h3> <p>{this.data.Year}</p>
                        <h3>Plot:</h3> <p>{this.data.Plot}</p>
                        <h3>Rating:</h3> <p>{this.data.imdbRating} <FontAwesomeIcon icon="star" size="2x" color="#blue" /></p>
                        <h3>Actors:</h3> <ul>
                            {this.data.Actors.split(", ").map((a) => {
                                return <li>{a}</li>
                            })}
                        </ul>
                        <h3>Director:</h3> <p>{this.data.Director}</p>
                        <h3>Genre:</h3> <p>{this.data.Genre}</p>
                    </div>

                    <div className="reviews-movie">
                        <h2 id="review">Reviews <FontAwesomeIcon icon="plus-circle" size="2x" /></h2>{product.reviews.map((r) => {
                            return <p>{r.text}</p>
                        })}
                    </div>

                </div>
            );
        }
        else {
            return (<div></div>)
        }

    }
}

export default ResultMovie