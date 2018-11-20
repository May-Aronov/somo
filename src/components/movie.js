import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEdit } from '@fortawesome/free-solid-svg-icons'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import AddFollow from "./AddFollow"
library.add(faStar, faEdit);
const axios = require('axios')

@inject("store")
@observer
class ResultMovie extends Component {
    @observable data = null


    componentDidMount = async () => {
        let dataApi = await axios.get(`http://www.omdbapi.com/?apikey=9bededde&t=${this.props.match.params.urlid}`)
        // let product = this.props.store.products[this.props.match.params.index]
        // let users = await axios.post(`http://localhost:8080/getUsers`,product.reviews)
        this.data = dataApi.data
    }

    render() {
        let product = this.props.store.products[this.props.match.params.index]
        if (this.data) {
            return (
                <div className="container-movie">
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
                        <h2 id="review">Reviews <FontAwesomeIcon icon="edit" size="1x" /></h2>
                        <div id="reviews-div">
                        {product.reviews.map((r) => {
                            return <div>
                                <AddFollow props favoriteid={r.user.id}/>
                                <span>{r.user ? r.user.name : null }</span> -  <span>{r.text}</span>
                            </div>
                        })}
                        </div>
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