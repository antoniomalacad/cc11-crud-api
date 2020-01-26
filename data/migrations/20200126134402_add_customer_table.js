exports.up = function(knex) {
  return knex.schema.createTable("customers", t => {
    t.increments().index();

    t.string("name", 15)
      .unique()
      .notNullable();
  });
};

exports.down = function(knex) {};
