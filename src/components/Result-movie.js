import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
const axios = require('axios')

@inject("store")
@observer
class ResultMovie extends Component {

    @observable data=null


    componentDidMount = async () => {
        let dataApi = await axios.get(`http://www.omdbapi.com/?apikey=9bededde&t=${this.props.match.params.urlid}`) 
        this.data=dataApi.data  
    }



    
    render() {
       let product= this.props.store.products[this.props.match.params.index]
        if(this.data){
            return (
                <div className="container-movie">
                <div className="nameMovie">
                <h1>{this.data.title}</h1>
                </div>
                <div className="img-movie">
                <img src={this.data.Poster}width="250" height="250"/>
                </div>
                <div className="details-movie">
               <h3> Year:</h3> <p>{this.data.Year}</p>
               <h3>Plot:</h3> <p>{this.data.Plot}</p>
               <h3>Rating:</h3> <p>{this.data.imdbRating}</p>
               <h3>Players:</h3> <ul>
                   {this.data.Actors.split(", ").map((a)=>{
                       return <li>{a}</li>
                   })}
                    </ul>
                    <h3>Director:</h3> <p>{this.data.Director}</p>
                    <h3>Genre:</h3> <p>{this.data.Genre}</p>
                </div>
                <div className="reviews-movie">
                <h2>Reviews:</h2>{product.reviews.map((r)=>{
                        return <p>{r.text}</p>
                })}
                </div>
                </div>
    );
        }
        else{
            return(<div></div>)
        }
        
    }
}

export default ResultMovie