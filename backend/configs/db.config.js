const mongoose = require("mongoose");
const { MONGODB_CONNECTION_STRING } = require("./environment.config");

const connectDB = async () => {
  const connect = mongoose.connect(MONGODB_CONNECTION_STRING);
  mongoose.set("runValidators", true);
  connect.then(
    (db) => {
      console.log("Connected Correctly to mongodb server ");
    },
    (err) => {
      console.log("Couldn't Connected Correctly to mongodb server  ");
      console.log(err);
    }
  );
};

module.exports = connectDB;
