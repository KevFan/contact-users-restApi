var User = require('../models/user');
var express = require('express');
var router = express.Router();

// Node.js body parsing middleware - needed for creating/updating a user
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// GET /users
// Get a list of users
router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      return res.status(500).json({
        error: "Error listing users: " + err
      });
    }

    res.json(users);
  });
});

// GET /users/:id
// Get a user by ID
router.get('/:id', function(req, res) {
  User.findOne({
    _id: req.params.id
  }, function(err, user) {
    if (err) {
      return res.status(500).json({
        error: "Error reading user: " + err
      });
    }

    if (!user) {
      return res.status(404).end();
    }

    res.json(user);
  });
});

// POST /users
// Creates a user
router.post('/', function (req, res) {
  // Create new user from request data
  User.create(req.body, function (err, user) {
      if (err) {
        return res.status(500).json({
          error: 'Error creating user' + err
        });
      }
      res.json(user);
  });

  // Another way by creating user as variable and saving
  // const new_user = new User(req.body);
  // new_user.save(function (err, user) {
  //   if (err) {
  //     return res.status(500).json({
  //       error: 'Error creating user' + err
  //     });
  //   }
  //
  //   res.json(user);
  // });
});

// PUT /users/:id
// Updates a user
router.put('/:id', function (req, res) {
  // Find the first user matching :id to update
  User.findOneAndUpdate({
    _id: req.params.id}, req.body, {new: true}, function (err, user) {
    // If encountered an error during updating user
    if (err) {
      return res.status(500).json({
        error: 'Error creating user' + err
      });
    }

    // If no user is found, send error code
    if (!user) {
      return res.status(404).end();
    }

    res.json(user);
  });
});

module.exports = router;
