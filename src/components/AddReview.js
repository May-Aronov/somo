import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";


@inject("store")
@observer
class AddReview extends Component {
    @observable user = {
        username: "",
        productType: "",
        productname: "",
        reviewText: ""
        //    hashtags:[]
    };

    @action inputChange = (e) => {
            this.user[e.target.name] = e.target.value
    }
    submitForm = () => {
        this.user.userName.toLowerCase();
        this.user.product.type.toLowerCase();
        this.user.product.Pname.toLowerCase();
        this.props.store.addReview(this.user)
        this.user.userName = "";
        this.user.reviewText = "";
        this.user.product = { type: "", Pname: "" }
    }



    render() {
        return (
            <form>
                <input type="text" name="username" onChange={this.inputChange} value={this.user.userName} />
                <input type="text" name="productType" onChange={this.inputChange} value={this.user.product.type} />
                <input type="text" name="productname" onChange={this.inputChange} value={this.user.product.Pname} />
                <input type="text" name="reviewText" onChange={this.inputChange} value={this.user.reviewText} />
                {/* <input type="text" name="hashtags" onChange={this.inputChange} value={this.user.hashtags}/> */}
                <button type="button" onClick={this.submitForm} >Add </button>
            </form>
        );
    }
}

export default AddForm;