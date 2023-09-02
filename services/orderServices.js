const db = require('../lib/orderModel');
const ClientServices = require('./clientServices');

class Order{
    constructor() {}

    getAll(){
        const orders = db;
        return orders;
    }

    create(data){
        const dbLength = Object.keys(db).length;
        const orderId = 'o' + (dbLength + 1);
        const { clientId, amount } = data;
        db[orderId] = data;
        ClientServices.increaseSpentAmount(clientId, amount);
        return true;
    }
}

module.exports = new Order();