exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {
          id: 1, 
          science_category: 'geometry',
          entertainment_category: 'mulan',
          geo_history_category: 'geography by continent',
          food_drink_category: 'whisk(e)y',
          random_category: 'strongman',
          bonus_round1: 'alphabois',
          bonus_round2: 'lookybois',
          bonus_round3: 'auditobois',
          max_points: 75,
          original_date: '2020-06-03'
        },
        {
          id: 2, 
          science_category: 'trigonometry',
          entertainment_category: 'bethesda games',
          geo_history_category: 'africa',
          food_drink_category: 'beans',
          random_category: 'ships and boats',
          bonus_round1: 'torturebois',
          bonus_round2: 'blankibois',
          bonus_round3: 'auditobois',
          max_points: 78,
          original_date: '2020-08-10'
        },
        {
          id: 3, 
          science_category: 'particle physics',
          entertainment_category: 'nintendo',
          geo_history_category: 'germany',
          food_drink_category: 'liqueurs',
          random_category: 'memeology',
          bonus_round1: 'choosybois',
          bonus_round2: 'truthybois',
          bonus_round3: 'alphabois',
          max_points: 75,
          original_date: '2020-08-17'
        }
      ])
      .then(function() {
        return knex.raw(`SELECT setval('games_id_seq', (SELECT MAX(id) FROM games))`)
        });
    });
};
