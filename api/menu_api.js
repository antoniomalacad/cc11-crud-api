const express = require("express");
const router = express.Router();
const queries = require("../database/queries");

router.get("/", (req, res) => {
  queries.getMenu().then(menu => {
    res.json(menu);
  });
});

router.get("/orders", (req, res) => {
  queries.getOrders().then(log => {
    response.json(log);
  });
});

module.exports = router;
