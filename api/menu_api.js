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
    res.json(log);
  });
});

router.post("/orders", (req, res) => {
  queries.sendOrders().then(log => {
    res.json(log);
  });
});

module.exports = router;
