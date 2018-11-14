
const connection=require('./da') 
const Sequelize = require('sequelize');

 let Hashtag = connection.connection.define("hashtag", {
    name: { type: Sequelize.STRING }
})



module.exports =(Hashtag);