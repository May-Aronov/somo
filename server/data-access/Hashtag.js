const connection=require('./da') 
const Sequelize = require('sequelize');

let Hashtag = connection.define("hashtag", {
    name: { type: Sequelize.STRING }
})

Hashtag.sync()

module.exports =Hashtag;