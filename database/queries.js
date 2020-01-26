const knex = require("./knex");

module.exports = {
  getMenu() {
    return knex("menu");
  },

  getOrders() {
    return knex("orders");
  }
};
