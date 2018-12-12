const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/APIAuth', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Route
app.use('/users', require('./routes/users'))

// Start the server 
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening at ${port}`);