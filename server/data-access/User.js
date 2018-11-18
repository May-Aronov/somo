
const connection=require('./da') 
const Sequelize = require('sequelize');
const Review = require('./Review')

let User = connection.connection.define("user", {
    name: { type: Sequelize.STRING },
    imgUrl:{ type: Sequelize.STRING(50000) }
})

User.hasMany(Review)
Review.belongsTo(User)



module.exports =User;