const logger = require('winston');
const server = require('../../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const seed = require('../../seed/seed');
const User = require('../../models/user');
const expect = require('chai').expect;

chai.should();
chai.use(chaiHttp);

const url = 'http://127.0.0.1:8001';


describe('Users', function() {

  // Before our test suite
  before(function(done) {
    // Start our app on an alternative port for acceptance tests
    server.listen(8001, function() {
      logger.info('Listening at http://localhost:8001 for acceptance tests');

      // Seed the DB with our users
      seed(function(error) {
        done(error);
      });
    });
  });

  describe('/GET users', function() {
    it('should return a list of users', function(done) {
      chai.request(url)
        .get('/users')
        .end(function(error, response) {
          response.body.should.be.a('array');
          response.should.have.status(200);
          response.body.length.should.be.eql(100);
          done();
        });
    });
  });

  describe('/GET users/:id', function() {
    it('should return a single user', function(done) {
      // Find a user in the DB
      User.findOne({}, function(error, user) {
        const id = user._id;

        // Read this user by id
        chai.request(url)
          .get('/users/' + id)
          .end(function(error, response) {
            response.should.have.status(200);
            expect(response.body).to.be.a('object');
            expect(response.body.name.first).to.be.a('string');
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
        .end(function (error, response) {
          response.should.have.status(200);
          expect(response.body).to.be.a('object');
          response.body.should.have.property('name');
          expect(response.body.name).to.be.a('string');
          response.body.name.should.be.eql('test');
          done();
        });
    });
  });
  
  describe('PUT users/:id', function () {
    it('should update a user', function (done) {
      chai.request(url)
        // Get list of users
        .get('/users')
        .end(function (error, response) {
          // Before updating first user name - test true
          response.body[0].name.first.should.be.eql('alison');
          chai.request(url)
            // Update first user name
            .put('/users/' + response.body[0]._id)
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
        .end(function (error, response) {
          // Before deleting first user - test true
          response.body[0].location.street.should.be.eql('1097 the avenue');
          chai.request(url)
            // Delete the first user
            .delete('/users/' + response.body[0]._id)
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
