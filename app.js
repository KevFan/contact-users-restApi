const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const marked = require('marked');
const fs = require('fs');
const logger = require('winston');
const userController = require('./controllers/users');

const app = express();

// Add middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(morgan('dev'));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
//
// app.get('/', function(request, response, error) { // eslint-disable-line no-unused-vars
//   const md = function(filename) {
//     const path = __dirname + "/" + filename;
//     const include = fs.readFileSync(path, 'utf8');
//     const html = marked(include);
//
//     return html;
//   };
//
//   return response.render('index.ejs', {
//     "md": md
//   });
// });

// See the User Controller for `/users` routes
app.use('/users', userController);


// Some switches for acceptance tests
if (require.main === module) {
  // Only connect to MongoDB if app.js is run
  // If require'd (e.g. in tests), let these tests establish a DB connection themselves
  mongoose.connect('mongodb://localhost/users');

  // Only listen when app.js is run - acceptance tests will listen on another port
  app.listen(8000, function() {
    logger.info('Listening at http://localhost:8000 - see here for API docs');
  });
}

module.exports = app;
