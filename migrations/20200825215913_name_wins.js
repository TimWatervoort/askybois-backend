exports.up = function(knex) {
  return knex.schema.createTable('name_wins', table => {
    table.increments();
    table.timestamps(false, true);
    table.integer('score_id').defaultTo(null).references('scores.id').onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('name_wins');
};
