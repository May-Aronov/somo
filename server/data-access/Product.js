const connection=require('./da') 
const Sequelize = require('sequelize');
const Hashtag = require('./Hashtag')
const Review = require('./Review')

Product = connection.define("product", {
    type: { type: Sequelize.STRING },
    name: { type: Sequelize.STRING }
})

Product.hasMany(Hashtag)
Product.hasMany(Review)

// Product.sync({})

module.exports =(Product);