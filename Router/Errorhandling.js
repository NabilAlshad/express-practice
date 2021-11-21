const express = require("express");

const err = express.Router();

err.get("/", (req, res) => {
  res.send(a);
});
err.use((error, req, res, next) => {
  if (error.message) {
    res.status(500).send(error.message);
  } else {
    res.status(500).send("there was an error");
  }
});
err.get("/", (req, res) => {
  res.send("this is error router");
});
module.exports = err;
