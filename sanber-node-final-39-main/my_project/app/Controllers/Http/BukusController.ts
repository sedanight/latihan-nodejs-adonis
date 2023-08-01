import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BukuValidator from 'App/Validators/BukuValidator'
import Buku from 'App/Models/Buku'

export default class BukusController {
  public async store({request, response}:HttpContextContract)
    {
      const payload = await request.validate(BukuValidator)
      const buku = await Buku.create(payload)
      // const game = await Database
      //   .table('games') // 👈 gives an instance of insert query builder
      //   .insert(payload)
    if(buku)
    {
        return response.created({
            message:"berhasil ditambahkan",
        })
    }
    return response.badRequest
    ({message:"gagal!"})
  }

  public async index ({response}:HttpContextContract)
  {

    // const game = await Database
    //   .from('games') // 👈 gives an instance of insert query builder
    //   .select('*')
    const buku = await Buku.query().preload('kategori').preload('peminjaman')


    if(buku)
    {
        return response.ok({
            message:"berhasil ditampilkan",
            data:buku
        })
    }

    return response.badRequest
    ({message:"gagal ditampilkan!"})
  }

  public async show({response, params}:HttpContextContract)
  {

    // const game = await Database
    //   .from('games') // 👈 gives an instance of insert query builder
    //   .where('id', params.id)
    //   .first()
    const buku = await Buku.query().where('id', params.id).preload('kategori')


    if(buku)
    {
        return response.ok({
            message:"berhasil tampilkan dgn id" + params.id,
            data:buku
        })
    }

    return response.notFound
    ({message:"gagal ditampilkan dgn id!"})


  }

  public async update({request, response, params}:HttpContextContract)
  {

    const payload = await request.validate(BukuValidator);

    //const genreID = await Database
    // .from('kategoris') // 👈 gives an instance of insert query builder
    // .where('id', params.id)
    // .first()

    const buku = await Buku
      .query() // 👈 gives an instance of insert query builder
      .where('id', params.id)
      .update(payload)


    if(buku)
    {
        return response.ok({message:"berhasil update" + params. id})
    }

    return response.badRequest
    ({message:"gagal!"})

  }

  public async destroy({response, params}:HttpContextContract)
  {

    // const game = await Database
    //   .from('games') // 👈 gives an instance of insert query builder
    //   .where('id', params.id)
    //   .delete()
    const buku = await Buku.findOrFail(params.id)
    await buku.delete()


    if(buku)
    {
        return response.ok({
      message:"delete untuk user yang ke-" + params. id
        })
    }

    return response.badRequest
    ({message:"gagal!"})
  }
}
