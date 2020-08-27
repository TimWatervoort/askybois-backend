
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('answer_wins').del()
    .then(function () {
      // Inserts seed entries
      return knex('answer_wins').insert([
        {id: 1, score_id: 1, question: 'Did they do it?', answer: 'Yeah.'},
        {id: 2, score_id: 2, question: 'How are you?', answer: 'Not bad.'},
      ])
      .then(function() {
        return knex.raw(`SELECT setval('answer_wins_id_seq', (SELECT MAX(id) FROM answer_wins))`)
        });
    });
};
