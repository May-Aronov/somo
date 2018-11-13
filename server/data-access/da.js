const Sequelize = require('sequelize');

class connection{
    constructor(){
        this.connection=new Sequelize('mysql://sql12263195:KTQsfqheNb@sql12.freesqldatabase.com/sql12263195');
        this.authenticate()
    }
    authenticate(){
        this.connection.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        })     
    }

}

let Connection = new connection()
module.exports = (Connection.connection);