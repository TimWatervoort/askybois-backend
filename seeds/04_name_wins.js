
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('name_wins').del()
    .then(function () {
      // Inserts seed entries
      return knex('name_wins').insert([
        {id: 1, score_id: 1},
        {id: 2, score_id: 3}
      ])
      .then(function() {
        return knex.raw(`SELECT setval('name_wins_id_seq', (SELECT MAX(id) FROM name_wins))`)
        });
    });
};
