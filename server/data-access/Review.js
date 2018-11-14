const connection=require('./da') 
const Sequelize = require('sequelize');


 let Review = connection.connection.define("review", {
    text: { type: Sequelize.STRING }
})



module.exports =(Review);