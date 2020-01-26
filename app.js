const config = require("./config");
const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();
const menu = require("./api/menu_api");

app.use(morgan("dev"));
app.use(bodyParser.json({ type: "application/json", limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use("/api/", menu);

app.use(express.static(__dirname));

app.listen(config.express.port, () => {
  console.log(`Server up and listening on port ${config.express.port}`);
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    messege: err.messege,
    error: req.app.get("env") === "development" ? err : {}
  });
});

module.exports = app;
