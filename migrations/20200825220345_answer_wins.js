exports.up = function(knex) {
  return knex.schema.createTable('answer_wins', table => {
    table.increments();
    table.timestamps(false, true);
    table.integer('score_id').defaultTo(null).references('scores.id').onDelete('CASCADE');
    table.string('question').notNullable().defaultTo('');
    table.string('answer').notNullable().defaultTo('');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('answer_wins');
};
