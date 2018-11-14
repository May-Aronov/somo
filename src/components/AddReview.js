import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
const axios = require('axios')

@inject("store")
@observer
class AddReview extends Component {
    @observable user = {
        userName: "",
        productType: "",
        productName: "",
        reviewText: "",
        productImgUrl:"",
        productUrlId:""
        //    hashtags:[]
    };

    @action inputChange = (e) => {
        this.user[e.target.name] = e.target.value

    }
    submitForm = () => {
        this.user.userName.toLowerCase();
        this.user.productType.toLowerCase();
        this.user.productName.toLowerCase();
        let user={
            userName: this.user.userName,
            productType: this.user.productType,
            productName: this.user.productName,
            reviewText: this.user.reviewText,
            productImgUrl:this.user.productImgUrl,
            productUrlId:this.user.productUrlId
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
            // console.log(Mydata.data);
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
                if(c == 0 ){alert("book not found")}
            }

        }
        else if (this.user.productType == "movie") {
            let Mydata = await axios.get('http://www.omdbapi.com/?apikey=9bededde&t=' + this.user.productName)
            // console.log(Mydata.data);
            Mydata = Mydata.data
            if (Mydata.Error) {
                alert(Mydata.Error)
            }
            else {
                this.user.productUrlId = Mydata.Title
                this.user.productImgUrl= Mydata.Poster
                this.user.productName= Mydata.Title
                alert("found :)")
            }
        }
    }



    render() {
        return (
            <form>
                <input type="text" name="userName" onChange={this.inputChange} value={this.user.userName} placeholder="user name ..." />
                <br />
                <input type="text" name="productType" onChange={this.inputChange} value={this.user.productType} placeholder="product type..." />
                <br />
                <input type="text" name="productName" onChange={this.inputChange} value={this.user.productName} placeholder="name EXACTLY!!!" />
                <button type="button" onClick={this.find}>find </button>
                <br />
                <input type="text" name="reviewText" onChange={this.inputChange} value={this.user.reviewText} placeholder="your review ..." />
                {/* <input type="text" name="hashtags" onChange={this.inputChange} value={this.user.hashtags}/> */}
                <br />
                <button type="button" onClick={this.submitForm} >Add </button>
            </form>
        );
    }
}

export default AddReview;