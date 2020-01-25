const config = require("./config");
const services = require("./services")(config);
const knex = require("knex")("./knexfile.js");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
