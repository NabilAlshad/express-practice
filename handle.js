const handle = (req, res) => {
  console.log(req.app.locals.title);
  res.send("this is handle");
};

module.exports = handle;
