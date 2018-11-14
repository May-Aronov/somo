import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEdit } from '@fortawesome/free-solid-svg-icons'
library.add(faStar, faEdit);


class ResultMovie extends Component {
    render() {
        return (
            <div className="container-movie" class="text-center">
            <div className="nameMovie">
            <h1 id="movieTitle">SOMO</h1>
            </div>
            <div className="img-movie">
            <img id="movieImage" src="https://img.wcdn.co.il/f_auto,w_700/2/5/1/1/2511904-46.jpg" width="250" height="250"/>
             </div>
            <div class="hover14 column">
  
  </div>
            <div id="detailsMovie" className="details-movie">
           <h3> Year:</h3> <p>2018</p>
           <h3>Plot:</h3> <p>  so strong but finally fought most of their power and used Css and Javascript and Html !!</p>
           <h3>Rating:</h3> <p>6.5 <FontAwesomeIcon icon="star" size="2x" color="#blue"/></p>
           <h3>Players:</h3> <ul>
                <li>Or Somo</li>
                <li>udu Somo</li>
                </ul>
                <h3>Director:</h3> <p>Or hirak , Ofri Zadok , Shir hen , May aronov , Dudu faruk</p>
                <h3>Genre:</h3> <p>Action</p>
            </div>
            
            <div className="reviews-movie">
            <h2 id="review">Reviews <FontAwesomeIcon icon="edit" size="1x" /> </h2>
            </div>
            
          </div>

        );

    }
}

export default ResultMovie