
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        {
          id: 1, 
          team_name: 'Hell Yeah',
          game_id: 1,
          points: 45,
          rank: 1,
          round1_percent: 23,
          round2_percent: 54,
          round3_percent: 87,
          science_percent: 98,
          entertainment_percent: 45,
          geo_history_percent: 23,
          food_drink_percent: 54,
          random_percent: 65
        },
        {
          id: 2, 
          team_name: 'A Big Ol Team Name',
          game_id: 2,
          points: 56,
          rank: 1,
          round1_percent: 33,
          round2_percent: 45,
          round3_percent: 66,
          science_percent: 46,
          entertainment_percent: 33,
          geo_history_percent: 12,
          food_drink_percent: 98,
          random_percent: 67
        },
        {
          id: 3, 
          team_name: 'E D G A R',
          game_id: 2,
          points: 33,
          rank: 2,
          round1_percent: 45,
          round2_percent: 46,
          round3_percent: 43,
          science_percent: 67,
          entertainment_percent: 87,
          geo_history_percent: 97,
          food_drink_percent: 77,
          random_percent: 67
        }
      ])
      .then(function() {
        return knex.raw(`SELECT setval('scores_id_seq', (SELECT MAX(id) FROM scores))`)
        });
    });
};
