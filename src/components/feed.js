import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import { faComment } from '@fortawesome/free-solid-svg-icons';
import '../Loader.css';
import Post from "./post.js"
library.add(faComment);


@inject("store")
@observer
class Feed extends Component {
  @observable feed = ''
  @observable reviews = ''

  @action componentDidMount = async () => {
    this.feed = await this.props.store.getFeed()
  }

  @action manipulateReviews = () => {
    let cool = []
    this.feed.favorite.forEach((f) => {
      f.reviews.forEach((r) => {
        let date = new Date(r.createdAt)
        let firstDate = date.toLocaleDateString()
        cool.push({ user: f, text: r.text, date: firstDate, product: r.product })
      })
    })
    this.reviews = cool.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    console.log(this.reviews)
  }



  render() {
    if (this.feed) { this.manipulateReviews() }
    if (this.reviews && this.feed) {
      return (<div className="feed text-center" >
        {this.reviews.map((u, i) => {
          return <Post user={u} key={i} i={i} />
        })}
      </div>
      );
    }
    else { return <div></div> }
  }
}

export default Feed;
