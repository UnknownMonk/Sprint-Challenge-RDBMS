exports.up = function(knex) {
  return knex.schema
    .createTable('action', tbl => {
      tbl.increments();
      tbl.text('description');
      tbl.text('notes');
      tbl.boolean('completed');
      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('project');
    })
    .createTable('project', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
      tbl.text('description').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project').dropTableIfExists('action');
};
