
const connection=require('./da') 
const Sequelize = require('sequelize');
const Review = require('./Review')
const UserFavorite=require('./UserFavorite')



let User = connection.connection.define("user", {
    name: { type: Sequelize.STRING },
    imgUrl:{ type: Sequelize.STRING(50000) }
})





User.belongsToMany(User,
    { through: UserFavorite, as: 'user', foreignKey: 'favoriteId' })
User.belongsToMany(User,
    { through: UserFavorite, as: 'favorite', foreignKey: 'userId' })


User.hasMany(Review)
Review.belongsTo(User)

module.exports =User;