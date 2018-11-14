import React, { Component } from 'react';
const axios = require('axios')

class ResultBook extends Component {
    render() {
        return (
            <div className="container-book">
                <div className="name-book">
                    <h1>NewBook</h1>
                </div>
                <div className="img-book">
                    <img src="https://cdn-images-1.medium.com/max/1024/1*OQXqTrTpXynrt85LeuaCnA.jpeg" width="250" height="250" />
                </div>

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

        );
    }
}

export default ResultBook;