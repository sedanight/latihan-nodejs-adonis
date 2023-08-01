import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'peminjaman'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('user_id').unsigned().references('users.id')
      table.integer('buku_id').unsigned().references('bukus.id')
      table.unique(['user_id','buku_id'])


      table.string('tanggal_pinjam')
      table.string('tanggal_kembali')

      table.timestamps(true, true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
