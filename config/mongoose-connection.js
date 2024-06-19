const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/eternal")
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log(err);
  });

module.exports = mongoose.connection;
