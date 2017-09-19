var logger = require('winston');
var server = require('../../app');
var chai = require('chai');
var chaiHttp = require('chai-http');
var seed = require('../../seed/seed');
var User = require('../../models/user');
var expect = require('chai').expect;

chai.should();
chai.use(chaiHttp);

var url = 'http://127.0.0.1:8001';


describe('Users', function() {

  // Before our test suite
  before(function(done) {
    // Start our app on an alternative port for acceptance tests
    server.listen(8001, function() {
      logger.info('Listening at http://localhost:8001 for acceptance tests');

      // Seed the DB with our users
      seed(function(err) {
        done(err);
      });
    });
  });

  describe('/GET users', function() {
    it('should return a list of users', function(done) {
      chai.request(url)
        .get('/users')
        .end(function(err, res) {
          res.body.should.be.a('array');
          res.should.have.status(200);
          res.body.length.should.be.eql(100);
          done();
        });
    });
  });

  describe('/GET users/:id', function() {
    it('should return a single user', function(done) {
      // Find a user in the DB
      User.findOne({}, function(err, user) {
        var id = user._id;

        // Read this user by id
        chai.request(url)
          .get('/users/' + id)
          .end(function(err, res) {
            res.should.have.status(200);
            expect(res.body).to.be.a('object');
            expect(res.body.name.first).to.be.a('string');
            done();
          });
      });
    });
  });

  describe('/POST users/', function () {
    it('should create a single user', function (done) {
      chai.request(url)
        .post('/users')
        .send({'name': 'test'})
        .end(function (err, res) {
          res.should.have.status(200);
          expect(res.body).to.be.a('object');
          res.body.should.have.property('name');
          expect(res.body.name).to.be.a('string');
          res.body.name.should.be.eql('test');
          done();
        });
    });
  });
  
  describe('PUT users/:id', function () {
    it('should update a user', function (done) {
      chai.request(url)
        // Get list of users
        .get('/users')
        .end(function (err, res) {
          // Before updating first user name - test true
          res.body[0].name.first.should.be.eql('alison');
          chai.request(url)
            // Update first user name
            .put('/users/' + res.body[0]._id)
            .send({'name': 'test'})
            .end(function (error, response) {
              response.should.have.status(200);
              response.body.should.be.a('object');
              response.body.should.have.property('name');
              response.body.should.have.property('_id');
              response.body.name.should.eql('test');
              console.log(response.body);
              done();
            });
        });
    });
  });

  describe('DELETE users/:id', function () {
    it('should delete a user', function (done) {
      chai.request(url)
        // Get list of users
        .get('/users')
        .end(function (err, res) {
          console.log(res.body[0]);
          // Before deleting first user - test true
          res.body[0].location.street.should.be.eql('1097 the avenue');
          chai.request(url)
            // Delete the first user
            .delete('/users/' + res.body[0]._id)
            .end(function (error, response) {
              response.should.have.status(200);
              response.body.should.be.a('object');
              response.body.should.not.have.property('_id');
              response.body.should.eql({});
              done();
            });
        });
    });
  });
});
