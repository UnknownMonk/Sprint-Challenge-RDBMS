exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('project').insert([
    { name: 'jane', description: 'girl' },
    { name: 'jhon', description: 'boy' },
    { name: 'jim', description: 'boy' }
  ]);
};
