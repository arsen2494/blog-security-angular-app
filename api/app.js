const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/blog', () => console.log('Connected to MongoDB'));

const users = require('./routes/users');
const posts = require('./routes/posts');
const comments = require('./routes/comments');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/comments', comments);

module.exports = app;
