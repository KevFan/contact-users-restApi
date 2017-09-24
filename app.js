const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const logger = require('winston');
const userController = require('./controllers/users');

const app = express();

// Add middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// See the User Controller for `/users` routes
app.use('/users', userController);

// Some switches for acceptance tests
if (require.main === module) {
  // Only connect to MongoDB if app.js is run
  // If require'd (e.g. in tests), let these tests establish a DB connection themselves
  mongoose.connect('mongodb://localhost/users');

  // Only listen when app.js is run - acceptance tests will listen on another port
  app.listen(8000, function () {
    logger.info('Listening at http://localhost:8000 - see here for API docs');
  });
}

module.exports = app;
