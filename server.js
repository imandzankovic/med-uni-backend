var express = require('express');
var app = express();
var api = require('./server/api/api');
var mongoose=require('mongoose');
//var config = require('./config/config');

require('./server/middleware/appMiddleware')(app);

// setup the api
app.use('/api', api);


mongoose.connect('mongodb://localhost:27017/MedUNI', { useNewUrlParser: true }, (err) => {
    if (!err)
        console.log('Connected to Mongo - MedUni');
})
app.listen(3000);

// export the app for testing
module.exports = app;