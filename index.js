// import { handle } from "./handle";
// const handle = require("./handle");
const express = require("express");
const myRouter = require("./Router/Myrouter");
const adminRouter = require("./Router/adminRoute");
const err = require("./Router/Errorhandling");

const upload = require("./Router/fileUpload");

const app = express();

const handler = require("./handler/handler");
const port = "4444";

app.use("/admin", adminRouter);
app.use("/err", err);
app.use("/my", myRouter);
app.use("/file", upload);
app.get("/user/:id", handler);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/about", (req, res) => {
  res.format({
    "text/plain": () => {
      res.send("hi");
    },
    "application/json": () => {
      res.json({
        message: "about",
      });
    },
    default: () => {
      res.status(400).send("not accepted");
    },
  });
});

app.listen(port, () => {
  console.log("listening on port");
});

// const admin = express();

// app.use(express.json());
// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.send("welcome");
// });

// app.use("/admin", admin); sub app

// admin.get("/dashboard", (req, res) => {
//   console.log(admin.mountpath);
//   res.send("this is admin page");
// });

// //app.params is like a middleware it takes four parameters

// app.param("id", (req, res, next, id) => {
//   const user = {
//     userId: id,
//     name: "nabil",
//   };

//   req.userDetails = user;
//   next();
// });

// app.get("/user/:id", (req, res) => {
//   console.log(req.userDetails);
//   res.send("this is a user id of id");
// });

// app.post("/", (req, res) => {
//   console.log(req.body.name);
//   res.send("hello world i am here");
// });

///app.route sets a common route

// app
//   .route("/about")
//   .get((req, res) => {
//     res.render("name");
//   })
//   .post((req, res) => {
//     res.send("about post route");
//   });
