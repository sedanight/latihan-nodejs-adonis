import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Buku from './Buku'

export default class Kategori extends BaseModel {
  public static table = 'kategoris'
  @column({ isPrimary: true })
  public id: number

  @column()
  public nama:string

  @hasMany(() => Buku,{
    foreignKey:'kategori_id'
  })
  public buku: HasMany<typeof Buku>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
