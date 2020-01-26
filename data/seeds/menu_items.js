const data = require("../src_data/menu.json");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("menu")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("menu").insert(
        data.map(entry => {
          return {
            id: entry.id,
            name: entry.name
          };
        })
      );
    });
};
