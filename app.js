const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require("dotenv").config();
const cors = require("cors");

const indexRouter = require('./api/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

module.exports = app;

// 1. Learn how accept images on server using Multer
// 2. Learn how to manipulate using Jimp
// 3. Structure project 'better'
  // - API folder holds logic which maps endpoints to controller actions
