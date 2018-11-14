
const Sequelize = require('sequelize');
const connection=require('./da') 
const Hashtag = require('./Hashtag')
const Review = require('./Review')


 let Product = connection.connection.define("product", {
    type: { type: Sequelize.STRING },
    name: { type: Sequelize.STRING },
    urlid:{type: Sequelize.STRING},
    imgurl:{type: Sequelize.STRING}
})



Product.create({ type: "movie" ,name:"avatar",urlid:"avatar" ,imgurl:"https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg" })
Review.create({
    text: "omg it's amazing",
    productId: 1
})



module.exports=Product;
