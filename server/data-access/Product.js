const connection=require('./da') 
const Sequelize = require('sequelize');
const Hashtag = require('./Hashtag')
const Review = require('./Review')

let Product = connection.define("product", {
    type: { type: Sequelize.STRING },
    name: { type: Sequelize.STRING }
})


module.exports =Product;