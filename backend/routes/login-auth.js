const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

const router = express.Router();

router.post('/adduser', (req, res, next) => {
    
    // console.log(req.body);
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
        password: req.body.password
    })
    user.save().then(result => {
        res.status(201).json({
            messages: 'User added Successfully',
            user: {...result, id: result._id}
        })
    })
})

router.post('/auth', (req, res, next) => {
    const usersList = User.find();
    let usersArr;
    usersList.then(users => {
        usersArr = users;
        console.log(usersArr);
        let user = usersArr.filter((user) => {
            return user.email == req.body.email && user.password == req.body.password;
        });
        
        if(user.length) {
            let token_payload = {name: user[0].name, password: user[0].password};
            let token = jwt.sign(token_payload, "jwt_secret_password", { expiresIn: '2h' });
            let response = { message: 'Token Created, Authentication Successful!', token: token, 
                userId: user[0]._id};
            res.status(200).json(response);
        } else {
            res.status(401).json({messages: 'unsuccessful'});
        } 
    });
});

module.exports = router;