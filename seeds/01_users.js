exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Opteryx', email: 'twwatervoort@gmail.com'},
        {id: 2, username: 'AstroAxolotl', email: 'elisemargueritehobbs@gmail.com'},
        {id: 3, username: 'PoliticalTrumpet', email: 'ben@watervoort.com'}
      ])
      .then(function() {
        return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`)
        });
    });
};
