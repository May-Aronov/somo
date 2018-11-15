const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router()
const Product = require('../data-access/Product')
const Hashtag = require('../data-access/Hashtag')
const Review = require('../data-access/Review')
// const User = require('../data-access/User')



router.post('/newreview/:username', async (req, res) => {
    let reqData = req.body;//{ username: "", productType: "",productname: "",reviewText: ""}
    console.log(reqData)
    await Product
        .findOrCreate({ where: { type: reqData.productType, name: reqData.productName, imgurl: reqData.productImgUrl, urlid: reqData.productUrlId } })
        .spread(async (user, created) => {
            let product = await user.get({ plain: true })
            console.log(product)
            let review = await Review.create({ text: reqData.reviewText, productId: product.id })
            let hashtags = reqData.hashtags

            await hashtags.forEach((h) => {
                Hashtag
                    .findOrCreate({ where: { name: h, productId: product.id } })
                    .spread(async (hashtag, created) => {
                      console.log(hashtag)
                    })
            })
            // console.log(review)
            res.status(201).send(review)
        })





    res.status(500).send(err);
})


router.get('/search/:SearchText', async (req, res) => {
    let searchtext = req.params.SearchText;
    Product.findAll({
        where: { name: searchtext },
        include: [Review]
    }).then(product => {

        res.status(201).send(product)
    })

})

// model:Review, include: [{
//     model:  User ,
//     where: { id: Sequelize.col('review.userId') }
// }]






module.exports = router