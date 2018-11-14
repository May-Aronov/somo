import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from "mobx";
import ResultMovie from './Result-movie';


@inject("store")
@observer
class Serch extends Component {

    @observable SearchText = ""

    // this.props.store.products
    handleChange = (e) => {
        this.SearchText = e.target.value
        this.props.store.filterReview(this.SearchText)
    }

    renderProducts = () => {
     return   this.props.store.products.map((p) => {
            return (
                <div onClick={()=>{this.handleProductClick(p)}} >
                    <h1>{p.name}</h1>
                  {/* <img src={p.img}/> */}                
                </div>
            )
        })
    }
    handleProductClick=(product)=>{
          if(product.type == "movie"){
              <ResultMovie  urlid={product.urlid}  />
          }
    }
    render() {
        return (
            <div>
                <h2>search</h2>
                <input name="SearchText" type="text" value={this.SearchText} onChange={this.handleChange} />
                {/* <select name='FilterName' value={this.props.FilterName} onChange={this.handleChange}>
                 <option value='movie'>movie</option>
                 <option value='book'>book</option>
             </select> */}
                {this.props.store.products ? this.renderProducts(): null}
            </div>
        );
    }
}

export default Serch;