
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



Product.hasMany(Hashtag)
Product.hasMany(Review)



module.exports=Product;
