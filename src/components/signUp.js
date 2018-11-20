import React, { Component } from 'react';
import Webcam from "react-webcam";
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";


@inject("store")
@observer
class signUp extends Component {
  @observable user = { UserName: "", img: "" }
  @observable showCamera = false

  handleChange = (e) => {
    this.user[e.target.name] = e.target.value

  }

  @action TakeScreenShoot = () => {
    this.showCamera = !this.showCamera

  }
  setRef = Webcam => {
    this.Webcam = Webcam;
  };

  @action capture = () => {
    const imageSrc = this.Webcam.getScreenshot();
    this.user.img = imageSrc + ""
  };


  onsubmit = () => {
    console.log(this.user)
    if (this.user.UserName && this.user.img)
      this.props.store.addUser(this.user)
    else {
      alert("missing details")
    }
  }


  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
    return (
      <div className="Search" class="text-center">
        <div className="inputSearch">
        <div className="SignUpStart">
          <h2 id="SigninUp">Sign Up</h2>
          <br></br>
          <h3 class="text-center" id="sign">Username:</h3>
          <input name="UserName" value={this.user.UserName} onChange={this.handleChange} id="inputSignUp" class="form-control" type="text" />
          </div>
          <div className="SignUpLater">
          <h3 id="sign2">profile image:</h3>
          <input name="img" value={this.user.img} onChange={this.handleChange} id="textSignUp" class="form-control" type="text" />
          <form className="formButtons">
          <button className="btn btn-primary-dark "onClick={this.TakeScreenShoot}>Take Screen Shoot</button>
          <br></br>
          {this.showCamera ?
             <div className="webCam">
            <Webcam
              audio={false}
              height={350}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={350}
              videoConstraints={videoConstraints}
            />
            <button onClick={this.capture}>Capture photo</button>
          </div>
           : null}
          <button type="sumbit" onClick={this.onsubmit} class="btn btn-dark">sign-up</button>
          </form>
        </div>
        </div>

      </div>
    )
  }
}
export default signUp;