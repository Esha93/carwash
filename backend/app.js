const express = require('express');
const bodyParser = require('body-parser');
const loginAuth = require('./routes/login-auth');
const mongoose = require('mongoose');

const app = express();

mongoose
    .connect(
        "mongodb+srv://eshareact:YcbyRRlMX7Xx7Wh1@cluster0-tdqb7.mongodb.net/test?retryWrites=true&w=majority"
        )
    .then((res) => {
        console.log('connected to database');
    })
    .catch((error) => {
        console.log('connection failed');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/images", express.static(path.join('backend/images')));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS, PUT");
    next();
});
// console.log(loginAuth);
app.use('/login', loginAuth);
module.exports = app;