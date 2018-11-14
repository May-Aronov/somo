import React, { Component } from 'react';


class ResultMovie extends Component {
    render() {
        return (
            <div className="container-movie">
            <div className="nameMovie">
            <h1>Somo</h1>
            </div>
            <div className="img-movie">
            <img src="https://img.wcdn.co.il/f_auto,w_700/2/5/1/1/2511904-46.jpg" width="250" height="250"/>
            </div>
            <div className="details-movie">
           <h3> Year:</h3> <p>2018</p>
           <h3>Plot:</h3> <p>It is told about the four most powerful samurai in the world, they dreamed of the forces of evil Acton and did not understand why it is so strong but finally fought most of their power and used Css and Javascript and Html !!</p>
           <h3>Rating:</h3> <p>6.5</p>
           <h3>Players:</h3> <ul>
                <li>Or Somo</li>
                <li>Dudu Somo</li>
                </ul>
                <h3>Director:</h3> <p>Or hirak , Ofri Zadok , Shir hen , May aronov , Dudu faruk</p>
                <h3>Genre:</h3> <p>Action</p>
            </div>
            <div className="reviews-movie">
            <h2>Reviews: </h2>
            </div>
            </div>

        );

    }
}

export default ResultMovie