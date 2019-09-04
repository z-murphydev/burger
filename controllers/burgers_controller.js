const express = require('express');
const burger = require('../models/burger.js');
const path = require('path');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(express.static(path.join(__dirname, '../views')));

router.get('/', (req, res) => {
    burger.allBurgers((data) => {
        res.render('index', {burgers: data});
    })
})

router.post('/create', (req, res) => {
    burger.create(req.body.burgerName, (data) => {

        res.redirect('/');
    })
})

router.put('/update', (req, res) => {
    burger.update(true, parseInt(req.body.id), (data) => {

        res.redirect('/');
    })
})

module.exports = router;