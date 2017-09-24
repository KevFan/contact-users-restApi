# Contact List - Rest REACT

![Image of FrontEnd](http://res.cloudinary.com/dv6skh7wa/image/upload/v1506272339/Capture_uieopx.png)

This project uses the feedhenry [users RESTful API project](https://github.com/feedhenry/users-api) as a base. The project completes the missing create, update and delete request of the RESTful API. It is built using JavaScript/Node.js, ExpressJS (a small, lightweight web MVC framework) & Mongoose (a MongoDB object modelling library) and REACT with semantic ui as the frontend. The API endpoints are also tested using mocha with mochawesome reporting. 

A simple UI is provided which allows the user to create, read, update, delete and list the contacts.
A search contact functionality is also included. 

## Feature List
+ Create new contact
+ Read contact
+ Delete contact
+ Update contact
+ List all contacts
+ Search contacts
  + Displays contacts where their first name or last name matches the search 

Notes:
+ Create, Read, Update and List functionality only display/take in title, first name and last name to display UI concept
+ New contacts are always given the default profile image with no option to change profile picture


## Pre-requisites

To get started, you'll need to have the following requirements installed

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- npm (Installed with Node.js)
- [MongoDB 2.6.x / 3.2.x](https://docs.mongodb.com/manual/administration/install-community/)

## Getting started
	
	# Ensure `mongod` is running, either as a service or in another shell
	git clone <this repo>
	npm install
	npm run-script seed # Seed the DB with Users
	npm start

The project can then be viewed on <http://localhost:8000/>

## Running React 
This part is only needed if you intend to make amends to the React part of the project as the client.min.js is already included.
	
	# Ensure you have the getting started section completed and running in a shell
	# Open another shell from the project directory:
	cd react
	npm install
	npm start

Running these command would install the node modules dependant by React and allow you to do dev work on the React part of the part, and build the client.min.js


## Running tests

Testing was completed using mocha. Endpoints of the API for PUT, POST, GET, DELETE requests are tested. 
To run tests enter:

`npm test`

![Image of Mochawesome](http://res.cloudinary.com/dv6skh7wa/image/upload/v1506286218/CaptureMochawe_lk2yib.png)

Mochawesome test reports are generated and included which can be found in the project directory:

```
contact-users-restApi/mochawesome-report/mochawesome.html
```

## API documentation

See [API.md](API.md) for details.

## Improvements
This is the first time I've created and used RESTful API. I would imagine there would be many things where the project is not REST like, such as directory structuring.

It is also the first time I've used REACT with semantic-ui, so I'm sure many of the react components and logic can be vastly improved, such as possibly using on class to handle the REST requests instead having them segregated.

The UI has several issues that can be improved, but the overall project shows a concept of the UI functionality and how a REST Api can be consumed in conjuction with REACT to create a single page application. 

Further application improvements would include:
+ Display/Edit/Create contact with more contact information such as address etc
+ Deploy the application
+ Secure the API

Known issues:
+ The modal for adding/editing a user does not close automatically upon submission/editing
  + To close the modal - click anywhere outside modal form

### List of Software + Technologies Used
+ [Node.js](https://nodejs.org/en/) - JavaScript runtime
+ [Express](https://expressjs.com/) - Node.js Web Framework
+ [WebStorm](https://www.jetbrains.com/webstorm/) - JavaScript IDE
+ [React](https://facebook.github.io/react/) - Javacript Library for building user interfaces
+ [SuperAgent](https://visionmedia.github.io/superagent/) - light-weight progressive ajax API
+ [Semantic UI React](https://react.semantic-ui.com/introduction) - React integration for Semantic UI
+ [mochawesome](https://www.npmjs.com/package/mochawesome) - Testing report
+ [Mocha](https://mochajs.org/) - JavaScript test framework
+ [MongoDB 2.6.x / 3.2.x](https://docs.mongodb.com/manual/administration/install-community/) - document database

## References
The REST API, REACT code and tests are based off several resources:
+ [Sample user RESTful API project](https://github.com/feedhenry/users-api)
+ [Build Node.js RESTful APIs in 10 Minutes](https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd)
+ [RESTful API design with Node.js](https://hackernoon.com/restful-api-design-with-node-js-26ccf66eab09)
+ [Testing Node.js With Mocha and Chai](http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.Wcfp3mhSybh)
+ [LearnCode Academy React Tutorials](https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b)

## Authors:
Kevin Fan ([KevFan](https://github.com/KevFan))

## Version/Date:
24th September 2017
