
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        //Primary key
        table.increments();

        //Columns
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //Relationship
        table.string('ong_id').notNullable();

        //Setting ong_id as foreign key
        table.foreign('ong_id').references('id').inTable('ongs');

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
