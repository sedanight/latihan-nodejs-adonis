import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import KategoriValidator from 'App/Validators/KategoriValidator'

export default class GenresController 
{
    
public async store({request, response}:HttpContextContract)
{

const payload = await request.validate(KategoriValidator);
const genre = await Database
  .table('kategoris') // 👈 gives an instance of insert query builder
  .insert(payload)


if(genre)
{
    return response.created({
        message:"berhasil ditambahkan"
    })
}

return response.badRequest
({message:"gagal!"})

}

public async index ({response}:HttpContextContract)
{
    
const genre = await Database
  .from('kategoris') // 👈 gives an instance of insert query builder
  .select('*')


if(genre)
{
    return response.ok({
        message:"berhasil ditampilkan",
        data:genre
    })
}

return response.badRequest
({message:"gagal ditampilkan!"})


}

public async show({response, params}:HttpContextContract)
{
    
const genre = await Database
  .from('kategoris') // 👈 gives an instance of insert query builder
  .where('id', params.id)
  .first()


if(genre)
{
    return response.ok({
message:"berhasil tampilkan dgn id" + params.id,
data:genre
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
  
const genre = await Database
  .from('kategoris') // 👈 gives an instance of insert query builder
  .where('id', params.id)
  .update(payload)


if(genre)
{
    return response.ok({
   message:"berhasil update" + params. id
    })
}

return response.badRequest
({message:"gagal!"})

}

public async destroy({response, params}:HttpContextContract)
{
    
const genre = await Database
  .from('kategoris') // 👈 gives an instance of insert query builder
  .where('id', params.id)
  .delete()


if(genre)
{
    return response.ok({
   message:"delete untuk user yang ke-" + params. id
    })
}

return response.badRequest
({message:"gagal!"})

}



}
