const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    contactNumber: {type: Number, required: true}
});

module.exports = mongoose.model('User', userSchema);

// const users = [
//     {email: 'test@test.com', password: 'testing'},
//     {email: 'test1@test.com', password: 'testing1'},
//     {email: 'test2@test.com', password: 'testing2'}
// ];

// module.exports = users;