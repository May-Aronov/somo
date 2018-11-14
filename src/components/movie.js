import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEdit } from '@fortawesome/free-solid-svg-icons'
library.add(faStar, faEdit);
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
const axios = require('axios')


@observer
class ResultMovie extends Component {
    @observable data = null


    componentDidMount = async () => {
        let dataApi = await axios.get(`http://www.omdbapi.com/?apikey=9bededde&t=${this.props.urlid}`)
        this.data = dataApi.data
    }

    render() {
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
                    <h2 id="review">Reviews <FontAwesomeIcon icon="edit" size="1x" /> </h2>
                    {/* <h2>Reviews:</h2>{this.props.reviews.map((r)=>{
                       return <p>{r.text}</p>
               })} */}
                </div>

            </div>

        );

    }
}

export default ResultMovie