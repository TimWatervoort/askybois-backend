exports.up = function(knex) {
  return knex.schema.createTable('users_scores', table => {
    table.increments();
    table.timestamps(false, true);
    table.integer('score_id').notNullable().defaultTo(0).references('scores.id').onDelete('CASCADE');
    table.integer('user_id').notNullable().defaultTo(0).references('users.id').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users_scores');
};
