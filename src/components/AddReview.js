import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";


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



    render() {
        return (
            <form>
                <input type="text" name="userName" onChange={this.inputChange} value={this.user.userName} />
                <input type="text" name="productType" onChange={this.inputChange} value={this.user.productType} />
                <input type="text" name="productName" onChange={this.inputChange} value={this.user.productName} />
                <input type="text" name="reviewText" onChange={this.inputChange} value={this.user.reviewText} />
                {/* <input type="text" name="hashtags" onChange={this.inputChange} value={this.user.hashtags}/> */}
                <button type="button" onClick={this.submitForm} >Add </button>
            </form>
        );
    }
}

export default AddReview;