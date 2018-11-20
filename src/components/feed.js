import React, {Component} from 'react';
import {observer,inject} from 'mobx-react';
import {observable,action} from "mobx";
import Post from "./post"
const axios = require('axios')

@inject("store")
@observer
class Feed extends Component {

    @observable feed = ''
    @observable reviews = ''

    @action componentDidMount = async () => {
        this.feed = await this.props.store.getFeed()
        
    }

    @action manipulateReviews = () => {
        let cool=[]
        this.feed.favorite.forEach((f) => {
            f.reviews.forEach((r) => {
                let date= new Date(r.createdAt)
                let firstDate = date.toLocaleDateString()
               cool.push({ user: f, text: r.text, date: firstDate, product: r.product })
            })
        })

        this.reviews=cool.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
          });
        console.log(this.reviews)
    }


    render() {
        if(this.feed) {this.manipulateReviews()}
        if(this.reviews&&this.feed){
            return (<div className="feed text-center" >
            {this.reviews.map((u, i) => {
                // console.log(u.userName)
                return <Post user={u} key={i} i={i}/>
            })}
        </div>
        );
        }
        else{return <div></div>}

    }
}
export default Feed;