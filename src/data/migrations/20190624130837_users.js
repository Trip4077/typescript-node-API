
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();

    tbl.string('first_name').notNullable();
    tbl.string('last_name').notNullable();
    tbl.string('password').notNullable();
    
    tbl.string('email').notNullable().unique();
    tbl.string('phone').notNullable().unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
