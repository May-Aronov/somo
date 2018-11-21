import { observable, action } from "mobx";
const axios = require('axios')

class reviewStore {
    @observable products = []
    @observable CurrentUser = this.getFromLocalStorage()

    saveToLocalStorage(user) {
        localStorage.setItem('somo', JSON.stringify(user));
    }

    getFromLocalStorage() {
        return JSON.parse(localStorage.getItem('somo') || null);
    }
    logout = () => {      
        localStorage.clear()
        this.CurrentUser=null;   
    }

    @action  addFavorite= async (favoriteid) => {
        try {
            let newfavorite= await axios.post(`/user/${this.CurrentUser.id}/favroite/${favoriteid}`, {})
            console.log(this.CurrentUser)
           this.CurrentUser.favorite.push(newfavorite.data)
        }
        catch{
            console.log("fail to add review")
        }
    }

    @action addReview = async (user) => {
        try {
            let newReview = await axios.post(`/newreview/${this.CurrentUser.id}`, user)
           return true;
        }
        catch{
            console.log("fail to add review")
            return false;
        }
    }

    @action AddHashtag = async (hashtag, productID,productindex) => {
        try {
            console.log(hashtag, productID)
            let newhashtag = await axios.post(`/product/${productID}/`, { hashtag: hashtag })
            console.log(newhashtag, this.products)

            this.products[productindex].hashtags.push(newhashtag.data) 
           
        }
        catch{
            console.log("fail to add hashtag")
        }
    }
    
    @action  getpopular= async () => {
        try {
            let product = await axios.get(`/topproducts`)
            console.log(product) 
            return (product.data)
        }
        catch(error){
            console.log(error)
        }
    }

    @action getReviewproduct = async (productname) => {
        try {
            let product = await axios.get(`/product/${productname}`) 
            console.log(product.data)
            return product.data;           
        }
        catch (error) {
            console.log("cant find any result")
        }
    }

    

    @action filterReview = async (SearchText, filtername) => {
        try {
            console.log(filtername)
            let products = await axios.get(`/search/${SearchText}/${filtername}`)
            if (filtername == 'hashtags') {
                products.data = products.data.map((data) => { return (data = data.product) })
            }
            this.products = products.data
            console.log(products)
        }
        catch (error) {
            console.log("cant find any result")
            this.products = []
        }
    }

    @action addUser = async (user) => {
        try {
            let newUser = await axios.post(`/newuser`, { UserName: user.UserName, Img: user.img })
            alert("u are successfully sign up , now go and sign in")
        }
        catch{
            alert(" pls try to sign up again,user name already exists")
        }
    }

    @action getUser = async (user) => {
        try {
            let currentuser = await axios.get(`/user/${user}`)
                this.saveToLocalStorage(currentuser.data);
                console.log(currentuser.data)
                this.CurrentUser = this.getFromLocalStorage()
                // alert("You are in, go create fun hashtags :)")
        }
        catch{
            alert(" faild to sign in")
        }
    }

    @action getFeed = async () => {
        try {
            let feed = await axios.get(`/myfeed/${this.CurrentUser.id}`)
            console.log(feed.data)
            return feed.data
        }
        catch{
            alert(" faild to sign in")
        }
    }

}

const store = new reviewStore();
export default store;
