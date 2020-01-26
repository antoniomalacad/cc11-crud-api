const { expect, assert } = require("chai");
const knex = require("../database/knex");
const app = require("../app.js");
const request = require("supertest");

const forcePromiseReject = () => {
  throw new Error("This promise should have failed, but did not.");
};

describe("CRUD API", () => {
  describe("Menu API", () => {
    it("should return menu as an object", done => {
      request(app)
        .get("/api")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .then(response => {
          expect(response.body).to.be.a("array");
          console.log(response.body);
          expect(response.body.length).to.equal(4);
          done();
        });
    });
  });
});
