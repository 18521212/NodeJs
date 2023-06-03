// const express = require('express')
import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import initAPIRoute from './route/api';
// import connection from './configs/connectDB';

require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// const path=require('path')

// setup view engine
configViewEngine(app)

// init web route
initWebRoute(app)

// init api route
initAPIRoute(app);

// app.get('/', (req, res) => {
//     res.render('index.ejs')
// })

// app.get('/about', (req, res) => {
//     res.send(`node`)
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('run request ...')
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h3>Hello world! </h3>');
//     res.write('<h2>from ERIC & HOI DAN IT </h2>');
//     res.end();
// })

// server.listen(3000, 'localhost', () => {
//     console.log('Node.JS server is running on port: 3000');
// })