const express = require('express');
const route = express.Router();
const newsController = require('../controller/newsController')

route.get('/news' , newsController.getNews);

module.exports = route;