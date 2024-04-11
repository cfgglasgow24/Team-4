// Import dependencies for server.
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// import routes
const getAllImage = require('./routes/imageRoutes');

// Create Express.JS app.
const app = express();

// Setup express JSON middleware - this allows us to access URL parameters..
app.use(express.json());

// Output API accesses to console.
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Connect to MongoDB. We don't start listening for requests unless we successfully connect to MongoDB.
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Current Environment: ${process.env.ENV_TEST === "true" ? "TEST" : "PRODUCTION"}`);
            console.log(`Connected to MongoDB. Server started on port ${process.env.PORT}.`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

module.exports = app;