import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Peminjaman from 'App/Models/Peminjaman'

export default class PeminjamenController {

  public async store({response,request,auth,params}:HttpContextContract){
    try {
      const userData = auth.user?.id
      const validatePeminjaman = schema.create({
        tanggal_pinjam:schema.string(),
        tanggal_kembali:schema.string()
      })
      await request.validate({schema:validatePeminjaman})
      await Peminjaman.create({
        user_id:userData,
        buku_id:params.id,
        tanggal_pinjam:request.input('tanggal_pinjam'),
        tanggal_kembali:request.input('tanggal_kembali')
      })
      return response.ok({message:"success pinjam"})
    }
    catch (error)
    {
      return response.badRequest
      ({message:"gagal menambahkan tanggal peminjaman!"})
    }
  }

  public async index({response}:HttpContextContract){
    const dataPeminjaman = await Peminjaman.query().preload('buku').preload('user')
    if (dataPeminjaman)
    {
      return response.ok({message:"telah memuat pinjaman", data:dataPeminjaman})
    }
    return response.badRequest({message:"gagal ditampilkan pinjaman!"})
  }

  public async show({response, params}:HttpContextContract){
    const dataPeminjaman = await Peminjaman.query().where('id',params.id).preload('buku').preload('user')
    if (dataPeminjaman)
    {
      return response.ok({message:"telah memuat pinjaman", data:dataPeminjaman})
    }
    return response.badRequest({message:"gagal ditampilkan pinjaman!"})
  }



}
