require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// add in when the app is ready to be deployed
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build'))); // this allows express to find the build folder
// Configure the auth middleware
// This decodes the jwt token, and assigns
// the user information to req.user
// api routes must be before the "catch all" route

// "catch all" route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 3001;

app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});
