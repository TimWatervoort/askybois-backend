exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.timestamps(false, true);
    table.string('username').notNullable().defaultTo('');
    table.string('email').defaultTo('');
    table.string('password').notNullable().defaultTo('');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
