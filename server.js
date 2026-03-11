const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://mongo:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Node.js + MongoDB running with Docker Compose");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
