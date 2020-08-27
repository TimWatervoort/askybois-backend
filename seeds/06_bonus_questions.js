
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bonus_questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('bonus_questions').insert([
        {id: 1, question: 'Why is it?', date: '8/5'},
        {id: 2, question: 'When is it?', date: '8/6'},
        {id: 3, question: 'Should it be?', date: '8/7'}
      ])
      .then(function() {
        return knex.raw(`SELECT setval('bonus_questions_id_seq', (SELECT MAX(id) FROM bonus_questions))`)
        });
    });
};
