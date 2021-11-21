const handler = (req, res) => {
  console.log(req.params.id);
  res.send("welcome to the dynamic route");
};
module.exports = handler;
