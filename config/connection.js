const mysql = require('mysql');

const burgerDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'H@rryP0tt3r',
    port: 3306,
    database: 'burgers_db'
});

module.exports = burgerDB;