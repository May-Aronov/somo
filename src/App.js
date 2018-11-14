
import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import Result from './components/Result-Book'

import './App.css';
import Search from './components/Search';
import AddReview from './components/AddReview';



@inject("store")
@observer
class App extends Component {
  render() {
    return (
      <div className='main-container'>
        <AddReview/>
        <Search/>
        {/* <Result/> */}
      </div>

    );
  }
}

export default App;