var express = require('express');
var bodyParser = require('body-parser');
const SERVER_PORT = 5555;
const api = require('./server/apis/usersApi')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use('/', api)

app.listen(SERVER_PORT, () => {
    console.log("Server started on port " + SERVER_PORT);
});







