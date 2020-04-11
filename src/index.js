const http = require("http");
const express = require("express");
const app = express();

// request handlers
const homepageHandler = function(req, res) {
  res.header("Content-type", "text/html");
  res.writeHead(200);
  return res.end("I am on homepage");
};

const aboutpageHandler = function(req, res) {
  res.header("Content-type", "text/html");
  res.writeHead(200);
  return res.end("I am on about page");
};

http
  .createServer(app) //create a server object
  .listen(8080); //the server object listens on port 8080

// Basic HTTP response
app.get("/", homepageHandler);
app.get("/about", aboutpageHandler);
