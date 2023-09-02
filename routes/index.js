const express = require('express');
const mainRouter = express.Router();
const clientsRouter = require('./clientRoutes');
const ordersRouter = require('./orderRoutes'); 

function mainRouting(app){
    app.use('/api/v1/restaurant', mainRouter);
    mainRouter.use('/clients', clientsRouter);
    mainRouter.use('/orders', ordersRouter);
}

module.exports = mainRouting;