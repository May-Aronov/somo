const Sequelize = require('sequelize');

class Connection{
    constructor(){
        this.connection=new Sequelize('mysql://sql12263194:aYZ57i5R4J@sql12.freesqldatabase.com/sql12263194');
        this.authenticate()
    }
    authenticate(){
        this.connection
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        })     
    }

}

const connection=new Connection()
module.exports = connection