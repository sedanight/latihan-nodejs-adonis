import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import KategoriValidator from 'App/Validators/KategoriValidator'
import Kategori from 'App/Models/Kategori'

export default class KategorisController {

  public async store({request, response}:HttpContextContract)
    {
      const payload = await request.validate(KategoriValidator)

      const kategori = await Kategori.create(payload)
      // const genre = await Database
      //   .table('genres') // 👈 gives an instance of insert query builder
      //   .insert(payload)
    if(kategori)
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

    // const genre = await Database
    //   .from('genres') // 👈 gives an instance of insert query builder
    //   .select('*')
    const kategori = await Kategori.query().preload('buku')

    if(kategori)
    {
        return response.ok({
            message:"berhasil ditampilkan",
            data:kategori
        })
    }

    return response.badRequest
    ({message:"gagal ditampilkan!"})
  }

  public async show({response, params}:HttpContextContract)
  {

    // const genre = await Database
    //   .from('games') // 👈 gives an instance of insert query builder
    //   .where('id', params.id)
    //   .first()

    const kategori = await Kategori.query().where('id', params.id).preload('buku')


    if(kategori)
    {
        return response.ok({
            message:"berhasil tampilkan dgn id" + params.id,
            data:kategori
        })
    }

    return response.notFound
    ({message:"gagal ditampilkan dgn id!"})


  }

  public async update({request, response, params}:HttpContextContract)
  {

    const payload = await request.validate(KategoriValidator);

    //const genreID = await Database
    // .from('kategoris') // 👈 gives an instance of insert query builder
    // .where('id', params.id)
    // .first()

    const kategori = await Kategori
      .query() // 👈 gives an instance of insert query builder
      .where('id', params.id)
      .update(payload)
    // const genre = await Genre.findOrFail(params.id);
    // genre.name = request.body['name'];
    // await genre.save()


    if(kategori)
    {
        return response.ok({message:"berhasil update" + params. id})
    }

    return response.badRequest
    ({message:"gagal!"})

  }

  public async destroy({response, params}:HttpContextContract)
  {

    const kategori = await Kategori.findOrFail(params.id)
      // .query() // 👈 gives an instance of insert query builder
      // .where('id', params.id)
      // .delete()
    await kategori.delete()


    if(kategori)
    {
        return response.ok({
      message:"delete untuk user yang ke-" + params. id
        })
    }

    return response.badRequest
    ({message:"gagal!"})

  }

}
