const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const books = require("./routes/books");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Add routes, both API and view
app.use("/api/books", books);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

