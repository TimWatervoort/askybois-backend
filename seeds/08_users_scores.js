
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_scores').insert([
        {
          id: 1,
          score_id: 1,
          user_id: 1
        },
        {
          id: 2,
          score_id: 2,
          user_id: 1
        },
        {
          id: 3,
          score_id: 3,
          user_id: 2
        }
      ]).then(function() {
        return knex.raw(`SELECT setval('users_scores_id_seq', (SELECT MAX(id) FROM users_scores))`)
        });
    });
};
