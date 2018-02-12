'use strict';

const express = require('express');
const searchYelp = require('./searchYelp.js')
const app = express();
const port = process.env.PORT || 8080;
// routes will go here
app.get('/search', searchYelp.search); 
app.get('/business', searchYelp.getBusinessInfo);
// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port); 

 
