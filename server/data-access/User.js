
const connection=require('./da') 
const Sequelize = require('sequelize');
const Review = require('./Review')
const UserFavorite=('./UserFavorite')



let User = connection.connection.define("user", {
    name: { type: Sequelize.STRING },
    imgUrl:{ type: Sequelize.STRING(50000) }
})

// Review.belongsTo(User)

// User.hasMany(User, {as: 'following'})

User.belongsToMany(User,
    { through: UserFavorite, as: 'user', foreignKey: 'favoriteId' })
User.belongsToMany(User,
    { through: UserFavorite, as: 'favorite', foreignKey: 'userId' })


User.hasMany(Review)

module.exports =User;