
const Sequelize = require('sequelize');
const connection=require('./da') 
const Hashtag = require('./Hashtag')
const Review = require('./Review')

 let Product = connection.connection.define("product", {
    type: { type: Sequelize.STRING },
    name: { type: Sequelize.STRING }
})

Product.hasMany(Hashtag)
Product.hasMany(Review)





// Product.create({ type: "movie" ,name:"ET" })
// Review.create({
//     text: "omg it's amazing",
//     productId: 1
// })



module.exports=Product;