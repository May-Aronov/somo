const connection = require('./da')
const Sequelize = require('sequelize');
const Hashtag = require('./Hashtag')
const Product = require('./Product')
const User = require('./User')
const Review = require('./Review')


Product.hasMany(Hashtag)
// Hashtag.belongsTo(Product)
Product.hasMany(Review)
// Review.belongsTo(Product)

// Product.sync()
// Review.sync({force:true})
// Hashtag.sync({force:true})


// module.exports = ();