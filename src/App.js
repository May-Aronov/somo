
import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import Result from './components/Result-Book'

import './App.css';
import Serch from './components/Serch';



@inject("store")
@observer
class App extends Component {
  render() {
    return (
      <div className='main-container'>
        <AddReview/>
        <Serch/>
        <Result/>
      </div>

    );
  }
}

export default App;