const connection=require('./da') 
const Sequelize = require('sequelize');


Review = connection.define("review", {
    text: { type: Sequelize.STRING }
})

// Review.sync({})

module.exports =(Review);