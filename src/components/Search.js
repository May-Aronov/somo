import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";


@inject("store")
@observer
class Serch extends Component {

    @observable  SearchText= ""
 

    handleChange=(e)=>{
        this.SearchText = e.target.value
        this.props.store.filterReview(this.SearchText)
    }



    render() {
        return (
            <div>
                <h2>search</h2>
            <input name="SearchText" type="text" value={this.SearchText} onChange={this.handleChange}/>
            {/* <select name='FilterName' value={this.props.FilterName} onChange={this.handleChange}>
                 <option value='movie'>movie</option>
                 <option value='book'>book</option>
             </select> */}
         </div>
        );
    }
}

export default Serch;