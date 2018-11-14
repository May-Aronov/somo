import React, { Component } from 'react';

class addReview extends Component {
  render() {
    return (
      <div className="addReview" class="text-center">
      <p class="add">ADD NEW REVIEW</p>
      <br></br>
        <input type="checkbox" />Movie
          <input type="checkbox" />Book
          <br></br>
        <input type="text" />
        <br></br>
        <button class="btn btn-dark">Check if Movie Exist</button>
        <br></br>
       <h3> Your Review:</h3>
        <br />
        <textarea  rows="8.5" cols="60"></textarea>
        <br></br>
     <h3>   Hashtags:</h3>
<br></br>
        <input class="form-control" id="ex3" type="text" />
        <button class="btn btn-dark">+</button>
        <br></br>
        <button class="btn btn-dark">Add</button>



        <br />
      </div>
    );
  }
}

export default addReview;