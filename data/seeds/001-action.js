exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('action').insert([
    {
      description: 'things to do',
      notes: ' about stuff',
      completed: null,
      project_id: null
    },
    {
      description: 'things not to do',
      notes: ' wrong stuff',
      completed: null,
      project_id: null
    },
    {
      description: 'Grey area',
      notes: 'everything else',
      completed: null,
      project_id: null
    }
  ]);
};
