'use strict';

// global dependencies
const http = require("http");
const express = require('express');
const app = express();

// request handlers
const homepageHandler = function (req, res) {
  res.header('Content-type', 'text/html');
  return res.end('I am on homepage');
};

const aboutpageHandler = function (req, res) {
  res.header('Content-type', 'text/html');
  return res.end('I am on about page');
};

http
  .createServer(app) //create a server object
  .listen(80); //the server object listens on port 80

// Basic HTTP response
app.get('/', homepageHandler);
app.get('/about', aboutpageHandler);