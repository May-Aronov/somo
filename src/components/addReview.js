import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle ,faPlusCircle} from '@fortawesome/free-solid-svg-icons'
library.add(faCheckCircle, faPlusCircle);
const axios = require('axios')

@inject("store")
@observer
class AddReview extends Component {
    @observable user = {
        userName: "",
        productType: "",
        productName: "",
        reviewText: "",
        productImgUrl: "",
        productUrlId: "",
        // hashtags: []
    };


    submitForm = () => {
        this.user.userName.toLowerCase();
        this.user.productType.toLowerCase();
        this.user.productName.toLowerCase();
        let user = {
            userName: this.user.userName,
            productType: this.user.productType,
            productName: this.user.productName,
            reviewText: this.user.reviewText,
            productImgUrl: this.user.productImgUrl,
            productUrlId: this.user.productUrlId,
            // hashtags: this.user.hashtags
        }
        console.log(user)
        this.props.store.addReview(user)
        this.user.productType = "";
        this.user.productName = "";
        this.user.userName = "";
        this.user.reviewText = "";

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
                        alert("found :)")
                        return;
                    }
                }
                if (c == 0) { alert("book not found") }
            }

        }
        else if (this.user.productType == "movie") {
            let Mydata = await axios.get('http://www.omdbapi.com/?apikey=9bededde&t=' + this.user.productName)
            console.log(Mydata.data);
            Mydata = Mydata.data
            if (Mydata.Error) {
                alert(Mydata.Error)
            }
            else {
                this.user.productUrlId = Mydata.Title
                this.user.productImgUrl = Mydata.Poster
                this.user.productName = Mydata.Title
                // this.user.hashtags.push()
                alert("found :)")
            }
        }
    }

    @action inputChange = (e) => {
        console.log(e.target.value)
        this.user[e.target.name] = e.target.value

    }

    render() {
        return (
            <div className="addReview" class="text-center">

                <h1><p class="add">ADD NEW REVIEW</p></h1>
                <h4 id="yourProduct"> Username:</h4>

                <input name="userName" onChange={this.inputChange} value={this.user.userName} class="form-control" id="text1" type="text" />
                
                <select name="productType" onChange={this.inputChange} value={this.user.productType} class="btn btn-dark">
                    <option>Select</option>
                    <option value="movie" >Movie</option>
                    <option value="book">Book</option>

                </select>
                <br></br>
                <br></br>
                <h3 id="yourProduct"> Product name:</h3>

                <input name="productName" onChange={this.inputChange} value={this.user.productName} class="form-control" id="text1" type="text" />

                <br></br>
                <button onClick={this.find} class="btn btn-dark">Check if Movie Exist  <FontAwesomeIcon icon="check-circle" size="2x" /></button>
                <br></br>
                <h3 id="yourReview"> Your Review:</h3>
                <textarea name="reviewText" onChange={this.inputChange} value={this.user.reviewText} class="form-control" id="ex2" rows="8.5" cols="60"></textarea>
               
               
                <h3 id="yourHashtags"> Hashtags:</h3>
                <input class="form-control" id="ex3" type="text" />
                <button class="btn btn-dark"><FontAwesomeIcon icon="plus-circle" size="2x" /></button>


                <br></br>
                <button class="btn btn-dark" id="buttonAdd" onClick={this.submitForm}>ADD</button>



                <br />
            </div>
        );
    }
}

export default AddReview;