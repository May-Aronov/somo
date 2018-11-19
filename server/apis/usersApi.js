const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router()
const Product = require('../data-access/Product')
const Hashtag = require('../data-access/Hashtag')
const Review = require('../data-access/Review')
const User = require('../data-access/User')
const UserFavorite = require('../data-access/UserFavorite')


router.post('/newuser', (req, res) => {
    let name = req.body.UserName
    let imgUrl = req.body.Img
    User.findOrCreate({ where: { name: name, imgUrl: imgUrl } })
        .spread(async (User, created) => {
            if (created) {
                let user = await User.get({
                    plain: true
                })
                console.log(user)
                res.status(201).send(user)
            }
        }).catch((error) => {
            res.status(500).send(error)
        })
})

router.post('/user/:userID/favroite/:favroiteID', (req, res) => {
    let userid = req.params.userID
    let favroiteid = req.params.favroiteID
    UserFavorite.create({ favoriteId: favroiteid, userId: userid }).then((user) => {
        User.findOne({ where: { id: favroiteid } }).then(favorite => {
            console.log(favorite)
            res.status(201).send(favorite)
        }).catch((error) => {
            res.status(500).send(error)
        })
    })
        .catch((error) => {
            res.status(500).send(error)
        })
})

router.post(`/product/:productID`, (req, res) => {
    let hashtag = req.body.hashtag
    Hashtag.findOrCreate({ where: { name: hashtag, productId: req.params.productID } })
        .spread(async (hashtag, created) => {
            if (created) {
                let Hashtag = await hashtag.get({
                    plain: true
                })
                console.log(Hashtag)
                res.status(201).send(Hashtag)
            }
            else {
                res.status(500).send("already exist")
            }
        }).catch((error) => {
            res.status(500).send(error)
        })
})


// router.post('/getUsers', (req, res) => {
//     let reviews = req.body
//     let users= []
//     reviews.map((r)=>{
//         User.findAll({ where: { id: r.userId },include: [Review] })
//         .then(user => {
//             users.push(user)
//             res.status(201).send(user)
//             }).catch((error)=>{
//              res.status(500).send(error)  
//          })
//     })
// })



router.post('/newreview/:userid', async (req, res) => {
    let reqData = req.body;//{ username: "", productType: "",productname: "",reviewText: ""}
    await Product
        .findOrCreate({
            where: {
                type: reqData.productType, name: reqData.productName, imgurl: reqData.productImgUrl
                , urlid: reqData.productUrlId
            }
        })
        .spread(async (user, created) => {
            let product = await user.get({ plain: true })
            let review = await Review.create({ text: reqData.reviewText, productId: product.id, userId: req.params.userid })
            await reqData.hashtags.forEach((h) => {
                Hashtag
                    .findOrCreate({ where: { name: h, productId: product.id } })
                    .spread(async (hashtag, created) => {
                        console.log(hashtag)
                    })
            })
            res.status(201).send(review)
        })
    res.status(500).send(err);
})


router.get('/user/:User', (req, res) =>{
    let username = req.params.User
    User.findOne({
        where: { name: username },
        include: [{
            model: User, as: "favorite"
        }]
    }).then(userr => {
        if (userr){
            console.log(userr)
            res.status(201).send(userr)
        }
        else {
            res.status(500).send("not found")
        }
    }).catch((error) => {
        console.log(error)
        res.status(500).send(error)
    })
})

router.get('/product/:productname', (req, res) => {
    let productname = req.params.productname;
        Product.findOne({
            where: {name: productname},
            include: [{ model: Review, include: [{ model: User }] }, { model: Hashtag }]
        }).then(product => {
            console.log(product)
            res.status(201).send(product)

        }).catch((error) => {
            res.status(500).send(error) 
})
})


router.get('/search/:SearchText/:filtername', (req, res) => {
    let searchtext = req.params.SearchText;
    let filtername = req.params.filtername
    console.log(searchtext)
    if (filtername == "movie" || filtername == "book") {
        Product.findAll({
            where: { name: searchtext, type: filtername },
            include: [{ model: Review, include: [{ model: User }] }, { model: Hashtag }]
        }).then(product => {
            console.log(product)
            res.status(201).send(product)

        }).catch((error) => {
            res.status(500).send(error)
        })
    }
    else {
        Hashtag.findAll({
            where: {
                name: searchtext
            },
            include: [{ model: Product, include: [{ model: Review, include: [{ model: User }] }, { model: Hashtag }] }]
        }).then(product => {
            res.status(201).send(product)
        })
            .catch((error) => {
                res.status(500).send(error)
            })
    }
})

// model:Review, include: [{
//     model:  User ,
//     where: { id: Sequelize.col('review.userId') }
// }]


// Hashtag.findAll({
//     where: {
//         name: searchtext
//     }
// }).then((hashtag) => {
//     let products=[]
//     hashtag.forEach((h) => {
//         Product.findAll({
//             where: { id: h.dataValues.productId },
//             include: [Review, Hashtag]
//         }).then((product) => {
//             products.push(product)
//         })

//     })
//     res.status(201).send(products)
// }).catch(err => {
//     res.status(500).send(err)
// })

module.exports = router
