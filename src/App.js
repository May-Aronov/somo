
import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import AddReview from './components/AddReview';

import './App.css';



@inject("store")
@observer
class App extends Component {
  render() {
    return (
      <div className='main-container'>
        <AddReview/>
      </div>

    );
  }
}

export default App;