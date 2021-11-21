const express = require("express");
const path = require("path");
const multer = require("multer");
const upload = express.Router();

const uploadFolder = "./uploads/";

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, uploadFolder);
  },
  fieldName: (req, res, cb) => {
    const fileExt = path.extname(file.originalname);
    const filename =
      file.originalname().replace(fileExt, "").split(" ").join("-") +
      Date.now();
    cb(null, filename + fileExt);
  },
});

const uploadFile = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.fieldName === "avatar") {
      console.log(file);
      if (
        file.mimeType === "image/png" ||
        file.mimeType === "image/jpg" ||
        file.mimeType === "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(new Error("this file is not supported"));
      }
    }

    if (file.fieldName === "doc") {
      if (file.mimeType == "application/pdf") {
        cb(null, true);
      } else {
        cb(new Error("this file is not supported"));
      }
    }
  },
});

upload.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send("there was an upload error");
    } else {
      res.status(500).send(err.message);
    }
  }
});

//for single upload we will use upload.single for multiple file we will use upload.array()
//if there will be multiple field we will use upload.fields and that takes a object as a parameter
upload.post(
  "/",
  uploadFile.fields([
    { name: "avatar", maxCount: 1 },
    { name: "doc", maxCount: 1 },
  ]),
  (req, res) => {
    console.log(req.files);
    res.send("file uploaded successfully");
  }
);

module.exports = upload;
