const config = require("./config");
const knex = require("knex")("./knexfile.js");
const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(morgan("dev"));

app.use(bodyParser.json({ type: "application/json", limit: "50mb" }));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Using Node.js, Express, and Postgres API." });
});

app.listen(config.express.port, () => {
  console.log(`Server up and listening on port ${config.express.port}`);
});
