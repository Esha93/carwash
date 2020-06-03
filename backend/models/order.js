const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    contact: {type: Number, required: true},
    userId: {type: String, required: false}
})

module.exports = mongoose.model('Order', orderSchema);