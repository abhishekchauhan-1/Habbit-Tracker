const mongoose = require("mongoose");

// storing the db on mongo atlas
const DB ="mongodb://singhchauhanabhishek816:Agcup8057@ac-mbr2aqm-shard-00-00.xrpgokl.mongodb.net:27017,ac-mbr2aqm-shard-00-01.xrpgokl.mongodb.net:27017,ac-mbr2aqm-shard-00-02.xrpgokl.mongodb.net:27017/Habit-Tracker?ssl=true&replicaSet=atlas-nkfbtx-shard-0&authSource=admin&retryWrites=true&w=majority";

// mongoose.connect('mongodb://127.0.0.1/habit_tracker');

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection successful!");
  })
  .catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
