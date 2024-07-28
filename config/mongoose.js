

// require mongoose
const mongoose = require('mongoose');

//  connect mongoose
mongoose.connect('mongodb://0.0.0.0/task_trackerdb');
const db = mongoose.connection;

// mongoose connection | error
db.on('error', console.error.bind(console, 'connection error:'));

// mongoose connection | successfull
db.once('open', function () {
    console.log("Connected to :: Mongo db");
});

module.exports = db;