const express = require('express');
const User = require('../models/valid-users');

const router = express.Router();

router.post('/auth', (req, res, next) => {
    // console.log(users);
    let user = User.filter((user) => {
        // console.log(req.body.email, user.name, req.body.password, user.password);
        return user.email == req.body.email && user.password == req.body.password;
    });
    console.log(user);
    if(user.length) {
        res.status(200).json({messages: 'successful'});
    } else {
        res.status(401).json({messages: 'unsuccessful'});
    }  
});

router.post('/adduser', (req, res, next) => {
    
    console.log(req.body);
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
    // if(user.length) {
    //     res.status(200).json({messages: 'User Already exists'});
    // } else {
    //     users.push({email: req.body.email, password: req.body.password})
    //     res.status(401).json({messages: 'unsuccessful'});
    // }
})

router.get('/auth', (req, res, next) => {
    const usersList = Post.find();
    console.log(usersList);
    // let user = usersList.filter((user) => {
    //     // console.log(req.body.email, user.name, req.body.password, user.password);
    //     return user.email == req.body.email && user.password == req.body.password;
    // });

});

module.exports = router;