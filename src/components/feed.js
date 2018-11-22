import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Loader from './Loader.js';
import '../Loader.css';
import Post from "./post.js"
import Chat from "./chat.js"



@inject("store")
@observer
class Feed extends Component {
  @observable feed = ''
  @observable reviews = ''
  @observable loader = ''
  @observable chat = false

  @action componentDidMount = async () => {
    this.loader=true
    this.feed = await this.props.store.getFeed()
  }

  @action manipulateReviews = () => {
    
    let cool = []
    this.feed.favorite.forEach((f) => {
      f.reviews.forEach((r) => {
        let date = new Date(r.createdAt)
       let Time=(`${date.getHours()} : ${date.getMinutes()}`)
        let firstDate = date.toLocaleDateString()
        cool.push({ user: f, text: r.text, date: firstDate , time: Time, product: r.product })
      })
    })
    this.reviews = cool.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    this.loader=false    
  }

  @action openChat=()=>{
    this.chat=true
  }



  render() {
    if (this.feed) { this.manipulateReviews() }
    if(this.loader){
      return   <Loader/>
     }
    if (this.reviews && this.feed) {
      return (
        <div className="w3-theme-l5">
          <div className="w3-col m7">
            {this.reviews.map((u, i) => {
              return <Post user={u} key={i} i={i} />
            })}
          </div>
          <Chat />
          {this.chat? <Chat /> : null}
        </div >
      );
    }
    else { return <Loader /> }
  }
}

export default Feed;
