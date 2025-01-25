const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
const dbo = require("./db/conn");

// Serve the React build folder
app.use(express.static(path.join(__dirname, "../client/build")));

// Catch-all route for React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

dbo.connectToMongoDB(function (error) {
  if (error) throw error;

  app.listen(port, () => {
    console.log("Server is running on port: " + port);
  });
});