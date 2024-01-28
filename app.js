/**
 * Author: Randika Nonis
 * Express.js
 */

//import Express.js module
const express = require("express");

//Creat an Express application
const app = express();

//Define the port to listen
const port = 3000;

//Middleware to serve static files from the public folder
app.use(express.static('public'));

//Define  the routes
//Home page with root
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});

//Home page
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});

//About page
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

//Contact page
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

//Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
