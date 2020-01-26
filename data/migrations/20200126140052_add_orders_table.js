exports.up = function(knex) {
  return knex.schema.createTable("orders", t => {
    t.increments().index();

    t.integer("customer_id")
      .notNullable()
      .references("id")
      .inTable("customers");
    t.integer("drink_id")
      .unique()
      .notNullable()
      .references("id")
      .inTable("menu");

    t.integer("quantity").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("orders");
};
