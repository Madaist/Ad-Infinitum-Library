const express = require('express'); // web framework that we’ll be using for building the REST APIs
const bodyParser = require('body-parser'); //  module that parses the request (of various content types) and creates a req.body object that we can access in our routes.

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('../config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// define a simple get route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Ad Infinitum library!"});
});

// Require Notes routes
require('../app/routes/book.routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
