
const connection=require('./da') 
const Sequelize = require('sequelize');
// const User = require('./User')

 let Review = connection.connection.define("review", {
    text: { type: Sequelize.STRING }
})


// Review.belongsTo(User)
module.exports =(Review);