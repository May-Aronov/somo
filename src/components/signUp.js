import React, { Component } from 'react';


class signUp extends Component {
  render() {
    return (
      <div  className="Search" class="text-center">
        <div className="inputSearch">
        <h1 id="search">SIGN UP</h1>
        <h3 class="text-center" id="sign">Username:</h3>

          <input id="text1"  class="form-control" type="text" />
          <h3 class="text-center" id="sign">Gender:</h3>
        
          <input id="text1"  class="form-control" type="text" />
          <h3 class="text-center" id="sign">Email:</h3>

          <input id="text1"  class="form-control" type="text" />
          <h3 class="text-center" id="sign">Password:</h3>

          <input id="text1"  class="form-control" type="text" />
          <h3 class="text-center" id="sign">Repeat Password:</h3>

          <input id="text1"  class="form-control" type="text" />

          <br></br>
          <button class="btn btn-dark">Find</button>
        </div>
        
      </div>
    )
    }
  }
      export default signUp;