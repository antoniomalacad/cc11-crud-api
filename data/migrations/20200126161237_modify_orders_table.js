exports.up = function(knex) {
  return knex.schema.alterTable("orders", t => {
    t.string("customer_name", 20).notNullable();
    t.timestamp("ordered_at")
      .notNullable()
      .defaultTo(knex.fn.now());
    t.string("comments", 30);
    t.string("status", 20)
      .notNullable()
      .defaultTo("received");
    t.dropColumn("customer_id");
  });
};

exports.down = function(knex) {};
