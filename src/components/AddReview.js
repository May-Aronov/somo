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
        reviewText: ""
        //    hashtags:[]
    };

    @action inputChange = (e) => {
        this.user[e.target.name] = e.target.value
        
    }
    submitForm = () => {
        this.user.userName.toLowerCase();
        this.user.productType.toLowerCase();
        this.user.productName.toLowerCase();
        // let user= {
        //     productName:this.user.productName,
        //     productType:this.user.productType,
        //     userName:this.user.userName,
        //     reviewText:this.user.reviewText
        // }
        this.props.store.addReview(this.user)
        this.user.productType= "";
        this.user.productName= "";
        this.user.userName= "";
        this.user.reviewText= "";
 
    }

    // find=async()=>{
    //     let results=[]
    //     if(this.user.productType=="book"){
    //         let Mydata= await axios.get('https://www.googleapis.com/books/v1/volumes?q='  + this.user.productName)
    //         console.log(Mydata.data);
    //         Mydata=Mydata.data
    //         if (Mydata.totalItems=="0"){
    //             alert("book not found")
    //         }
    //         for (let i = 0; i < 5; i++) {
    //             let title = Mydata.items[i].volumeInfo.title;
    //             let id = Mydata.items[i].id;
    //             results.push[title]
    //             let img = Mydata.items[i].volumeInfo.imageLinks.smallThumbnail;
    //         }

    //     }
    //     else if(this.user.productType=="movie"){
    //         let Mydata= await axios.get('https://www.googleapis.com/books/v1/volumes?q='  + this.user.productName)
    //         console.log(Mydata.data);
    //         Mydata=Mydata.data
    //         if (Mydata.totalItems=="0"){
    //             alert("book not found")
    //         }
    //         for (let i = 0; i < 5; i++) {
    //             let title = Mydata.items[i].volumeInfo.title;
    //             let id = Mydata.items[i].id;
    //             results.push[title]
    //             let img = Mydata.items[i].volumeInfo.imageLinks.smallThumbnail;
    //         }
    //     }
    // }



    render() {
        return (
            <form>
                <input type="text" name="userName" onChange={this.inputChange} value={this.user.userName} placeholder="user name ..." />
                <br />
                <input type="text" name="productType" onChange={this.inputChange} value={this.user.productType}  placeholder="product type..." />
                <br />
                <input type="text" name="productName" onChange={this.inputChange} value={this.user.productName}  placeholder="name of the product ..." />
                <button type="button" onclick={this.find}>find </button>
                <br />
                <input type="text" name="reviewText" onChange={this.inputChange} value={this.user.reviewText}  placeholder="your review ..."/>
                {/* <input type="text" name="hashtags" onChange={this.inputChange} value={this.user.hashtags}/> */}
                <br />
                <button type="button" onClick={this.submitForm} >Add </button>
            </form>
        );
    }
}

export default AddReview;