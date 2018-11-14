const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router()
const Product = require('../data-access/Product')

const Review = require('../data-access/Review')
// const User = require('../data-access/User')



router.post('/newreview/:username',async(req, res) => {
    let reqData = req.body;//{ username: "", productType: "",productname: "",reviewText: ""}
   console.log(reqData)
 await   Product
  .findOrCreate({where: {name: reqData.productName , type: reqData.productType}})
  .spread(async(user, created) => {
 let product= user.get({plain: true})
//  console.log(product)
 let review= await Review.create({text:reqData.reviewText,productId:product.id})
//  console.log(review)
 res.status(201).send(review)
  })

  res.status(500).send(err);
})
 

router.get('/serch/:SearchText', async (req, res) => {
    let searchtext = req.params.SearchText;
    Product.findAll({
        where:{name:searchtext},
        include: [Review]
    }).then(product=>{
 
        res.status(201).send(product)  
    })

})
 







module.exports = router