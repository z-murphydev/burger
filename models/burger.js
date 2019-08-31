const orm = require('../config/orm.js');

const burger = {
    allBurgers: function(cb) {
        orm.selectAll('burgers', (data) => {
            cb(data);
        })
    },
    create: function(burger, cb) {
        orm.insertOne(burger, (data) => {
            cb(data);
        })
    },
    update: function(devoured, id, cb) {
        orm.updateOne(devoured, id, (data) => {
            cb(data);
        })
    }
}

module.exports = burger;