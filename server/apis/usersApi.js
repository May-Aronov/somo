const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router()
const Product = require('../data-access/Product')

const Review = require('../data-access/Review')
// const User = require('../data-access/User')



Api.post('/newreview/:username', async (req, res) => {
    let reqData = req.body;//{ username: "", productType: "",productname: "",reviewText: ""}
   
    Product
  .findOrCreate({where: {name: reqData.productname, type: reqData.productType}})
  .spread((user, created) => {
 let product= user.get({plain: true})
 let review= await Review.create({text:reqData.reviewText,productId:product.id})
 res.status(201).send(review)
  })

  res.status(500).send(err);
})
 

Api.get('/search', async (req, res) => {
    let searchtext = req.body;
    Product.findAll({
        where:{name:searchtext},
        include: [Review]
    }).then(product=>{
        product.reviews
    })

})
 







module.exports = router