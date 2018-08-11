const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const apiRoutes = require("./api");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/static", express.static(path.join(__dirname, "dist")));
app.use("/api", apiRoutes);

app.get("*", (req, res) => {
  const filename = path.join(__dirname, "./index.html");
  res.set("content-type", "text/html");
  res.sendFile(filename);
})

app.listen(PORT);

console.log("Warehouse server listening on port " + PORT + " in " + process.env.NODE_ENV);
