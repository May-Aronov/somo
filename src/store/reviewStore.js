
import { observable, action } from "mobx";
const axios = require('axios')

class reviewStore {
    @observable products = null
    // @observable User =this.getFromLocalStorage()
    // STORAGE_ID = 'somo'

    // saveToLocalStorage(user) {
    //     localStorage.setItem(this.STORAGE_ID, JSON.stringify(user));
    // }

    // getFromLocalStorage() {
    //     return JSON.parse(localStorage.getItem(this.STORAGE_ID) || "");
    // }

    @action addReview = async (user) => {
        try{
        let newReview = await axios.post(`http://localhost:8080/newreview/${this.User.id}`, user)
        console.log(newReview)
        }
        catch{
            console.log("fail to add review")
        }
    }

    @action filterReview = async (SearchText, filtername) => {
        try {
            let products = await axios.get(`http://localhost:8080/search/${SearchText}/${filtername}`)
            if (filtername == 'hashtags') {
                products.data = products.data.map((data) => { return (data = data.product) })
            }
            this.products = products.data
        }
        catch (error) {
            console.log("cant find any result")
            this.products = null
        }
    }
    // @action addUser = async (user) => {
    //     try {
    //         let newUser = await axios.post(`http://localhost:8080/newuser`, { UserName: user.UserName ,Img:user.img  })
    //         alert("u are successfully sign up , now go and sign in")
    //     }
    //     catch{
    //         alert(" pls try to sign up again,user name already exists")
    //     }
    // }

    // @action getUser = async (user) => {
    //     try {
    //         let currentuser = await axios.get(`http://localhost:8080/user/${user}`)
    //         console(currentuser)
    //         this.saveToLocalStorage(currentuser.data);
    //        console.log("yhhh i'm in")
    //     }
    //     catch{
    //         alert(" faild to sign in")
    //     }
    // }
}

const store = new reviewStore();
export default store;