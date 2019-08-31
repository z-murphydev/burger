const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/', (req, res) => {
    burger.allBurgers((data) => {
        res.json(data);
    })
})

router.post('/create', (req, res) => {
    burger.create(req.body.burgerName, (data) => {
        console.log(data);
        res.end();
    })
})

router.put('/update', (req, res) => {
    burger.update(true, parseInt(req.body.id), (data) => {
        console.log(data);
        res.end();
    })
})

module.exports = router;