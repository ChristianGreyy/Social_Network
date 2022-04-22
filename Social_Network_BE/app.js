require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
// 
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();

const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images')))

console.log(path.join(__dirname, 'images'))


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
        // const server = app.listen(8080);
        const httpServer = createServer(app);
        const io = new Server(httpServer, {
            cors: {
                origin: "*",
            },
            transports: ["polling"],
            maxHttpBufferSize: 8e6,
        });
        httpServer.listen(8080)

        io.on('connection', (socket) => {
            console.log('user conneciton')
            socket.emit('test', "hahaha");
        })

    })
    .catch(err => {
        console.log(err);
    })
