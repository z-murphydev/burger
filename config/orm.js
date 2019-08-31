const burgersDB = require('./connection.js');

const orm = {
    selectAll: function(table) {
        burgersDB.query('SELECT * FROM ?', [table], (err, data) => {
            if (err) throw err;

            console.log(data);
        })
    },

    insertOne: function(burger) {
        burgersDB.query('INSERT INTO burgers (burger_name) VALUES (?)', [burger], (err, data) => {
            if (err) throw err;

            console.log(data);
        })
    },

    updateOne: function(devoured, id) {
        burgersDB.query('UPDATE burgers SET devoured = ? WHERE id = ?', [devoured, id], (err, data) => {
            if (err) throw err;

            console.log(data);
        })
    }
}

module.exports = orm;