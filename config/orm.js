const burgersDB = require('./connection.js');

const orm = {
    selectAll: function(table, cb) {
        burgersDB.query('SELECT * FROM ??', [table], (err, data) => {
            if (err) throw err;

            cb(data);
        })
    },

    insertOne: function(burger, cb) {
        burgersDB.query('INSERT INTO burgers (burger_name) VALUES (?)', [burger], (err, data) => {
            if (err) throw err;

            cb(data);
        })
    },

    updateOne: function(devoured, id, cb) {
        burgersDB.query('UPDATE burgers SET devoured = ? WHERE id = ?', [devoured, id], (err, data) => {
            if (err) throw err;

            cb(data);
        })
    }
}

module.exports = orm;