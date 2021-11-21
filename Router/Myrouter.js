const express = require("express");

const myRouter = express.Router();

myRouter.get("/", (req, res) => {
  res.send("dashboard");
});

myRouter.get("/login", (req, res) => {
  res.send("login page");
});

module.exports = myRouter;
