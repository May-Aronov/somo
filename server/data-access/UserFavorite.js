const Sequelize = require('sequelize');
const connection=require('./da') 

let UserFavorite = connection.connection.define("UserFavorite", {
    favoriteId: {
    type: Sequelize.INTEGER
    },
    userId: {
        type: Sequelize.INTEGER
    }
 })

 



module.exports = UserFavorite;