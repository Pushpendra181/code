const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const registerRoute = require("./routes/user");
const bookRoute = require("./routes/book");

// Middleware
app.use(express.json()); 
app.use(cors()); 
app.use("/upload", express.static(path.join(__dirname, "upload")));

app.get("/", (req, res) => {
  res.send("successful");
});

app.use("/", registerRoute);
app.use("/post", bookRoute);

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});

// MongoDB Connection
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/code")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err.message);
  });
