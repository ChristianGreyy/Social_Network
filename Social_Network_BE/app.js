require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const router = require('./routes/index');
app.use(router)

mongoose.connect('mongodb://localhost/social_network_dev')
    .then(result => {
        console.log('connect database successfully');
        app.listen(PORT, () => {
            console.log('server is listening on port ' + PORT)
        })
    })
    .catch(err => {
        console.log(err);
    })
