
import { observable , action } from "mobx";
const axios = require('axios')

class reviewStore{
    @observable   products =null

    @action addReview=async(user)=>{
        console.log(user)
       let newReview= await axios.post(`http://localhost:8080/newreview/${user.userName}`,user)
    //     this.user=newUser.data      
    }

    @action filterReview=async(SearchText)=>{
       let products= await axios.get(`http://localhost:8080/serch/${SearchText}`)
       this.products=products.data
    }
    // @action  getUser=async(userName)=>{
    //     let newUser= await axios.get(`http://localhost:8080/users/${userName}`)
    //     this.user=newUser.data
    //     // console.log(newUser)
    // }
}

const store = new reviewStore();
export default store;