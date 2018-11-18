const connection = require('./da')
const Sequelize = require('sequelize');

const Review = require('./Review')
const Hashtag = require('./Hashtag')
const Product = require('./Product')
const User = require('./User')
const UserFavorite = require('./UserFavorite')

UserFavorite.sync({})
Product.sync({})
User.sync({})
Review.sync({})
Hashtag.sync({})



