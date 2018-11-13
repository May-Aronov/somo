const connection=require('./da') 
const Sequelize = require('sequelize');
const Review = require('./Review')

User = connection.define("user", {
    name: { type: Sequelize.STRING },
    imgUrl:{ type: Sequelize.STRING }
})

User.hasMany(Review)

// User.sync({})

module.exports =(User);