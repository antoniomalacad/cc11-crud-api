const config = require("./config");
const knex = require("knex")("./knexfile.js");
const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(morgan("dev"));

app.use(bodyParser.json({ type: "application/json", limit: "50mb" }));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static(path.join(__dirname)));

app.listen(config.express.port, () => {
  console.log(`Server up and listening on port ${config.express.port}`);
});
