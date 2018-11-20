import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route,Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Loader from "./Loader"

library.add(faCheckCircle, faPlusCircle);
const axios = require('axios')

@inject("store")
@observer
class AddReview extends Component {
    @observable user = {
        productType: "",
        productName: "",
        reviewText: "",
        productImgUrl: "",
        productUrlId: "",
        hashtags: [],
        newHashtag: ''
    };
    @observable  loader=false
    @observable apiconfirm=false
    @observable messege={status:false ,reqON:false};

    submitForm = async() => {

        this.loader=true
        this.user.productType.toLowerCase();
        this.user.productName.toLowerCase();
        let user = {
            productType: this.user.productType,
            productName: this.user.productName,
            reviewText: this.user.reviewText,
            productImgUrl: this.user.productImgUrl,
            productUrlId: this.user.productUrlId,
            hashtags: this.user.hashtags
        }
       if(this.apiconfirm || this.reviewText){
       this.messege.status =await this.props.store.addReview(user)
       this.loader=false
       this.messege.reqON=true 
       this.user = {
            productType: "",
            productName: "",
            reviewText: "",
            productImgUrl: "",
            productUrlId: "",
            hashtags: [],
            newHashtag: ''         
        }
        }
        else{
            alert("you need to add product,review and confirm your product name")
        }
       
    }

    @action find = async () => {
        if (this.user.productType == "book") {
            let Mydata = await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.user.productName)
            console.log(Mydata);
            Mydata = Mydata.data
            if (Mydata.totalItems == "0") {
                alert("book not found")
                return;
            }
            else {
                let c = 0;
                for (let i = 0; i < 10; i++) {
                    let title = Mydata.items[i].volumeInfo.title;
                    if (title.toLowerCase() === this.user.productName.toLowerCase()) {
                        c++;
                        this.user.productUrlId = Mydata.items[i].id;
                        this.user.productImgUrl = Mydata.items[i].volumeInfo.imageLinks.smallThumbnail;
                        this.user.hashtags = this.findHashtagBook(Mydata.items[i].volumeInfo)
                        alert("found :)")
                        this.apiconfirm=true
                        return;
                    }
                }
                if (c == 0) { alert("book not found") }
            }

        }
        else if (this.user.productType == "movie") {
            try {
                console.log('http://www.omdbapi.com/?apikey=9bededde&t=' + this.user.productName)
                let Mydata = await axios.get('http://www.omdbapi.com/?apikey=9bededde&t=' + this.user.productName)
                Mydata = Mydata.data
                if (Mydata.Error) {
                    alert(Mydata.Error)
                }
                else {
                    this.user.productUrlId = Mydata.Title
                    this.user.productImgUrl = Mydata.Poster
                    this.user.productName = Mydata.Title
                    this.user.hashtags = this.findHashtagMovie(Mydata)
                    this.apiconfirm=true
                    alert("found :)")
                }
            }
            catch (error) {
                console.log(error)
                alert("api doesnt work")
            }
        }
    }

    @action inputChange = (e) => {
        console.log(e.target.value)
        this.user[e.target.name] = e.target.value

    }

    @action addHashtag = () => {
        this.user.hashtags.push(this.replace(this.user.newHashtag))
        this.user.newHashtag = ''
    }

    findHashtagMovie = (data) => {
        let arr = []
        let year = + data.Year
        arr.push(year)

        //gneres
        let Genres = ''
        if (data.Genre.includes(",")) {
            Genres = data.Genre.split(", ").map((g) => {
                arr.push(g.toLowerCase())
            })
        }
        else {
            Genres = data.Genre.toLowerCase()
            arr.push(Genres)
        }


        //act
        data.Actors.split(", ").map((a) => {
            arr.push(this.replace(a))
        })

        //award
        if (data.Awards.includes("Oscars")) {
            arr.push("oscars")
        }
        if (data.Awards.includes("Golden Globe")) {
            arr.push("golden_globe")
        }

        //director
        if (data.Director.includes(",")) {
            data.Director.map((d) => {
                arr.push(this.replace(d))
            })
        }
        else {
            arr.push(this.replace(data.Director))
        }

        arr.push(this.replace(data.Title))
        return arr
    }


    findHashtagBook = (data) => {
        let arr = []
        if (Array.isArray(data.authors)) {
            data.authors.map((d) => {
                arr.push(this.replace(d))
            })
        }
        else {
            arr.push(this.replace(data.authors))
        }
        arr.push(data.publishedDate.slice(0, 4))
        arr.push(this.replace(data.title))
        return arr
    }

    replace = (word) => {
        return word.toLowerCase().split(" ").join("_").replace(/\s+/g, ' ')
            .replace(/[\'\".,\/!$%\\^&\*;:{}=\-`~()\[\]|+@?<>]/g, '')
            .replace(/\s{2,}/g, ' ');
    }



    render() {
        // if(!this.props.store.CurrentUser){
        //     alert("u need to sign in or signup")
        //     return <Redirect to='/home' />
        // }
        if(!this.props.store.CurrentUser){
            this.props.history.push("/home");
            alert("u need to sign in or signup");
        }
        if(this.loader){
         return   <Loader/>
        }
        return (
            <div className="addReview" class="text-center">
<div className="addReviewImg">
                <h2><p className="add">Add new review</p></h2>

                {this.props.store.CurrentUser &&
                    <div>
                        <h2 id="yourCurrentUser"> {this.props.store.CurrentUser.name}</h2>
                        <img className="ImgSize" src={this.props.store.CurrentUser.imgUrl} alt=""></img>
                    </div>}

                <select name="productType" onChange={this.inputChange} value={this.user.productType} class="btn btn-dark">
                    <option>Select</option>
                    <option value="movie" >Movie</option>
                    <option value="book">Book</option>

                </select>
                <br></br>
                </div>
                <div className="productReview">
                <form className="addReviewForm">
                <br></br>


               <div> {this.messege.reqON && this.messege.status  ?  <p>successfully add your review!</p> :  
               this.messege.reqON ?
               <p>fail to add your review!</p> :  null        
               }
               </div>



                <h2 id="yourProduct"> Product name:</h2>
                <input name="productName" onChange={this.inputChange} value={this.user.productName} class="form-control" id="text1" type="text" />
                <br></br>
                <button onClick={this.find} class="btn btn-dark">Check if Movie Exist  <FontAwesomeIcon icon="check-circle" size="2x" /></button>
                <ul>
                    {
                        this.user.hashtags.map((h, i) => {
                            return <li key={i}>{'#' + h}</li>
                        })
                    }
                </ul>
                <h3 id="yourReview"> Your Review:</h3>
                <textarea name="reviewText" onChange={this.inputChange} value={this.user.reviewText} class="form-control" id="ex2" rows="8.5" cols="60"></textarea>


                <h2 id="yourHashtags"> Hashtags:</h2>

                <input name="newHashtag" onChange={this.inputChange} value={this.user.newHashtag} class="form-control" id="ex3" type="text" />
                <button class="btn btn-dark" onClick={this.addHashtag}><FontAwesomeIcon icon="plus-circle" size="2x" /></button>



                <br></br>
                <button class="btn btn-dark" id="buttonAdd" onClick={this.submitForm}>ADD</button>
             

                <br />
                <br></br>
                </form>
                </div>
                
            </div>
        );
    }
}

export default AddReview;