exports.up = function(knex) {
  return knex.schema.alterTable("menu", t => {
    t.integer("price").notNullable();
  });
};

exports.down = function(knex) {};
