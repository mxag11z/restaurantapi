const express = require('express');
const router = express.Router();
const services = require('../services/orderServices');

router.get('/', 
    (req, res) => {
        const orders = services.getAll();
        res.status(200).json({
            message: 'Here are your orders',
            orders
        });
    }
);

router.post('/', 
    (req, res) => {
        const data = req.body;
        const confirmation = services.create(data);
        res.status(201).json({
            confirmation
        });
    }
);

module.exports = router;