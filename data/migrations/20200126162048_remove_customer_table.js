exports.up = function(knex) {
  return knex.schema.dropTable("customers");
};

exports.down = function(knex) {};
