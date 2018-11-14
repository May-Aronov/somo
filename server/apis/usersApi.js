const express = require('express')
const router = express.Router()
// var bodyParser = require('body-parser');
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: false }));

const Product = require('../data-access/Product')
// const User = require('../data-access/User')
const Review = require('../data-access/Review')


// Product.findOne({ type: "movie" }).then((product) => {
//     Review.create({
//         text: "hgjhg",
//         productId:product.id
//     }).then(review => {
//         console.log(review)
//     }
//     )
// })

// Product.create({type:"movie",name:"ET"})
Review.create({text:"superrrr",productId:"1"})


// //1
// router.get('/users/children/:userName', function (req, res) {
//     User.findAll({
//         where: { userName: req.params.userName },
//         include: [{ model: User, as: 'child' },{ model: User, as: 'parent' }] 
//     }).then(user => {
//         console.log(user)
//         res.send(user)
//     }).catch((err) => res.status(500).send(err))
// })

// //2
// router.post('/users/createUser', function (req, res) {
//     // console.log(req.body.userName)
//     // console.log(req.body.imgUrl)
//     // res.send("r.status")
//     User.create({
//         userName: req.body.userName,
//         imgUrl: req.body.imgUrl,
//     }).then(user =>{
//         if(req.body.parentId){
//             User.findOne({where:{id:req.body.parentId}}).then((parent)=>{
//                 parent.addChild(user)
//             })
//         }
//         res.send(user.status)
//     }
//     ).catch((err) => res.send(err))



// });


// // //3
// // router.get('/getid/:name', function (req, res) {
// //     let name = req.params.name.split("%20").join(" ")
// //     console.log(name)
// //     Client.findOne({
// //         where: {
// //             name: name
// //         }
// //     }).then(client => {
// //         res.send(client.dataValues.id)
// //     }).catch((err) => res.send(err))

// // });


// // router.put(`/update/:id/owner/:newowner`, function (req, res) {
// //     console.log(req.params.newowner + " " + req.params.id)
// //     Client.update(
// //         { owner: req.params.newowner },
// //         {
// //             where: {
// //                 id: req.params.id
// //             }
// //         }).then(r => {
// //             console.log(r)
// //             res.send(r.status)
// //         }
// //         ).catch((err) => res.send(err))

// // });

// // router.put(`/update/:id/emailtype/:emailtype`, function (req, res) {
// //     Client.update(
// //         { emailType: req.params.emailtype },
// //         {
// //             where: {
// //                 id: req.params.id
// //             }
// //         }).then(r => {
// //             console.log(r)
// //             res.send(r.status)
// //         }
// //         ).catch((err) => res.send(err))

// // });

// // router.put(`/update/:id/declaresale`, function (req, res) {
// //     Client.update(
// //         { sold: true },
// //         {
// //             where: {
// //                 id: req.params.id
// //             }
// //         }).then(r => {
// //             console.log(r)
// //             res.send(r.status)
// //         }
// //         ).catch((err) => res.send(err))

// // });

// // //add new client

// // router.post('/newClient', function (req, res) {
// //     Client.create(req.body).then(r => {
// //         console.log(r)
// //         res.send(r.status)
// //     }
// //     ).catch((err) => res.send(err))
// // });

// // //get clients in the last 30 days    
// // router.get('/clientsthismonth', function (req, res) {
// //     let today = new Date()
// //     today.setMonth(today.getMonth() - 3)
// //     let now = new Date()
// //     let beforeMonth = today.toISOString().slice(0, 19).replace('T', ' ')
// //     let thisTime = now.toISOString().slice(0, 19).replace('T', ' ')

// //     Client.findAll({
// //         where: {
// //             sold: true,
// //             firstContact: {
// //                 $between: [beforeMonth, thisTime]
// //             }
// //         }
// //     }).then(clients => {
// //         let data = clients.map((c) => {
// //             return c.dataValues.firstContact
// //         })
// //         res.send(data)
// //     }).catch((err) => res.send(err))
// // })


module.exports = router