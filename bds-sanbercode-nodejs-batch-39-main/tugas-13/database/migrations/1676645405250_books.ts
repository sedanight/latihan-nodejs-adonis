import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id'), 
      table.string('title'), 
      table.text('summary'), 
      table.string('release_date'), 
      table.integer('stock'), 
      table 
           .integer('category_id') 
           .unsigned() 
           .references('kategoris.id') 
           .onDelete('CASCADE')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
