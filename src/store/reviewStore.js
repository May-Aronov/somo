
import { observable , action } from "mobx";
const axios = require('axios')

class reviewStore{
    @observable  userReview =null

    @action addReview=async(user)=>{
       let newReview= await axios.post(`http://localhost:8080/newreview/${user.username}`,{user})
    //    console.log(newUser)
    //     this.user=newUser.data      
    }

    // @action  getUser=async(userName)=>{
    //     let newUser= await axios.get(`http://localhost:8080/users/${userName}`)
    //     this.user=newUser.data
    //     // console.log(newUser)
    // }
}

const store = new reviewStore();
export default store;