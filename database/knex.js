const envirnoment = process.env.NODE_ENV || "development";
const config = require("../knexfile");
const envirnomentConfig = config[envirnoment];
const knex = require("knex");
const connection = knex(envirnomentConfig);

module.exports = connection;
