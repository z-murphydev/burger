const mysql = require('mysql');

let burgerDB; 


if (process.env.JAWSDB_URL) {
    burgerDB = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    burgerDB = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:'H@rryP0tt3r',
        port: 3306,
        database: 'burgers_db'
    });
}



module.exports = burgerDB;