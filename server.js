var express = require('express');
var bodyParser = require('body-parser');
const Api = require('./server/apis/usersApi')
const SERVER_PORT = process.env.PORT || 8080;
const path = require("path")
let app = express();



app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })


  app.use(express.static('build'));
  app.use(express.static('node_modules'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/',Api);
  app.get("*" , (req,res)=>{
      res.sendFile(path.join(__dirname,  '/build/index.html'))
  })

app.listen(SERVER_PORT, () => {
    console.log("Server started on port " + SERVER_PORT);
});







