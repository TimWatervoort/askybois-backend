exports.up = function(knex) {
  return knex.schema.createTable('scores', table => {
    table.increments();
    table.timestamps(false, true);
    table.string('team_name').notNullable().defaultTo('');
    table.integer('game_id').defaultTo(null).references('games.id').onDelete('CASCADE');
    table.integer('points').notNullable().defaultTo(0);
    table.integer('rank').notNullable().defaultTo(0);
    table.integer('round1_percent').defaultTo(0);
    table.integer('round2_percent').defaultTo(0);
    table.integer('round3_percent').defaultTo(0);
    table.integer('science_percent').defaultTo(0);
    table.integer('entertainment_percent').defaultTo(0);
    table.integer('geo_history_percent').defaultTo(0);
    table.integer('food_drink_percent').defaultTo(0);
    table.integer('random_percent').defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('scores');
};
