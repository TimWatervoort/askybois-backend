exports.up = function(knex) {
  return knex.schema.createTable('bonus_questions', table => {
    table.increments();
    table.timestamps(false, true);
    table.string('question').notNullable().defaultTo('');
    table.string('date').notNullable().defaultTo('');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('bonus_questions');
};
