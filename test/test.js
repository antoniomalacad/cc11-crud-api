const { expect, assert } = require("chai");
const config = require("../config");
const knex = require("knex")("./knexfile.js");

const forcePromiseReject = () => {
  throw new Error("This promise should have failed, but did not.");
};
