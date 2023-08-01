import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import BukuValidator from 'App/Validators/BukuValidator'

export default class BukusController
{
public async store({request, response}:HttpContextContract)
{

 
const payload = await request.validate(BukuValidator)

const buku = await Database
  .table('books') // 👈 gives an instance of insert query builder
  .insert(payload)


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
    
const buku = await Database
  .from('books') // 👈 gives an instance of insert query builder
  .select('*')


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
    
const buku = await Database
  .from('books') // 👈 gives an instance of insert query builder
  .where('id', params.id)
  .first()


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
  
const book = await Database
  .from('books') // 👈 gives an instance of insert query builder
  .where('id', params.id)
  .update(payload)


if(book)
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
    
const book = await Database
  .from('books') // 👈 gives an instance of insert query builder
  .where('id', params.id)
  .delete()


if(book)
{
    return response.ok({
   message:"delete untuk user yang ke-" + params. id
    })
}

return response.badRequest
({message:"gagal!"})

}


}
