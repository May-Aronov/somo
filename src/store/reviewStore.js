import { observable, action } from "mobx";
const axios = require('axios')

class reviewStore {
    @observable products = null
    @observable CurrentUser =this.getFromLocalStorage()

    saveToLocalStorage(user) {
        localStorage.setItem('somo', JSON.stringify(user));
    }

    getFromLocalStorage() {
        return JSON.parse(localStorage.getItem('somo') || null);
    }
    logout=()=>{
        localStorage.clear()
    }

    @action addReview = async (user) => {
        try{
        let newReview = await axios.post(`http://localhost:8080/newreview/${this.CurrentUser.id}`, user)
        console.log(newReview)
        }
        catch{
            console.log("fail to add review")
        }
    }
    AddHashtag=async(hashtag, productID) => {
        try{
        let newhashtag = await axios.post(`http://localhost:8080/product/${productID}/`, {hashtag:hashtag})
        console.log(newhashtag)
        }
        catch{
            console.log("fail to add hashtag")
        }
    }

    @action filterReview = async (SearchText, filtername) => {
        try {
            let products = await axios.get(`http://localhost:8080/search/${SearchText}/${filtername}`)
            if (filtername == 'hashtags') {
                products.data = products.data.map((data) => { return (data = data.product) })
            }
            this.products = products.data
            console.log(products)
        }
        catch (error) {
            console.log("cant find any result")
            this.products = null
        }
    }
    @action addUser = async (user) => {
        try {
            let newUser = await axios.post(`http://localhost:8080/newuser`, { UserName: user.UserName ,Img:user.img  })
            alert("u are successfully sign up , now go and sign in")
        }
        catch{
            alert(" pls try to sign up again,user name already exists")
        }
    }

    @action getUser = async (User) => {
        try {
            let user = await axios.get(`http://localhost:8080/user/${User}`)
            this.saveToLocalStorage(user.data); 
        }
        catch(error){
            console.log(error)
            alert(" faild to sign in,wrong username!")
        }
    }
}

const store = new reviewStore();
export default store;
