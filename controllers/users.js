const User = require('../models/user');
const express = require('express');
const router = express.Router();

// Node.js body parsing middleware - needed for creating/updating a user
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// GET /users
// Get a list of users
router.get('/', function (request, response) {
  User.find({}, function (error, users) {
    if (error) {
      return response.status(500).json({
        error: 'error listing users: ' + error,
      });
    }

    response.json(users);
  });
});

// GET /users/:id
// Get a user by ID
router.get('/:id', function (request, response) {
  User.findOne({
    _id: request.params.id,
  }, function (error, user) {
    if (error) {
      return response.status(500).json({
        error: 'error reading user: ' + error,
      });
    }

    if (!user) {
      return response.status(404).end();
    }

    response.json(user);
  });
});

// POST /users
// Creates a user
router.post('/', function (request, response) {
  // Create new user from request data
  User.create(request.body, function (error, user) {
    if (error) {
      return response.status(500).json({
        error: 'error creating user' + error,
      });
    }

    response.json(user);
  });

  // Another way by creating user as variable and saving
  // const new_user = new User(request.body);
  // new_user.save(function (error, user) {
  //   if (error) {
  //     return response.status(500).json({
  //       error: 'error creating user' + error
  //     });
  //   }
  //
  //   response.json(user);
  // });
});

// PUT /users/:id
// Updates a user
router.put('/:id', function (request, response) {
  // Find the first user matching :id to update
  User.findOneAndUpdate({
    _id: request.params.id, }, request.body, { new: true }, function (error, user) {
    // If encountered an error during updating user
    if (error) {
      return response.status(500).json({
        error: 'error updating user' + error,
      });
    }

    // If no user is found, send error code
    if (!user) {
      return response.status(404).end();
    }

    response.json(user);
  });
});

//Deletes a user
router.delete('/:id', function (request, response) {
  User.findByIdAndRemove({
    _id: request.params.id,
  }, function (error, user) {
    // If encountered an error in user creation
    if (error) {
      return response.status(500).json({
        error: 'error deleting user' + error,
      });
    }

    // If no user is found, send error code
    if (!user) {
      return response.status(404).end();
    }

    // If user is successfully removed
    response.status(200).send('User ' + user._id + ' was deleted.');
  });
});

module.exports = router;
