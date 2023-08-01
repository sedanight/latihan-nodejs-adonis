import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Buku from './Buku'
import User from './User'

export default class Peminjaman extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id:number

  @column()
  public buku_id:number

  @column()
  public tanggal_pinjam:string

  @column()
  public tanggal_kembali:string

  @belongsTo(() => Buku,{
    foreignKey:'buku_id'
  })
  public buku: BelongsTo<typeof Buku>

  @belongsTo(() => User,{
    foreignKey:'user_id'
  })
  public user: BelongsTo<typeof User>


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
