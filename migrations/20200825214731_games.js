exports.up = function(knex) {
  return knex.schema.createTable('games', table => {
    table.increments();
    table.timestamps(false, true);
    table.string('science_category').defaultTo('');
    table.string('entertainment_category').defaultTo('');
    table.string('geo_history_category').defaultTo('');
    table.string('food_drink_category').defaultTo('');
    table.string('random_category').defaultTo('');
    table.string('bonus_round1').defaultTo('');
    table.string('bonus_round2').defaultTo('');
    table.string('bonus_round3').defaultTo('');
    table.integer('max_points').notNullable().defaultTo(0);
    table.datetime('original_date', { useTz: false }).notNullable().defaultTo(new Date().toLocaleDateString());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('games');
};
