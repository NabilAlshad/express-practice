const express = require("express");

const adminRoute = express.Router();

const log = (req, res, next) => {
  console.log("logging");
  next();
};
adminRoute.all("*", log);

adminRoute.get("/dashboard", (req, res) => {
  console.log(req.baseUrl); //it returns the base url
  console.log(req.originalUrl); //it gives us the original url

  console.log(req.hostname); //it returns the hostname such as "localhost"
  console.log(req.method);
  res.send("welcome to the admin dashboard");
});
module.exports = adminRoute;
