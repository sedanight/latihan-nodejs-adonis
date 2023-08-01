import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

//import { schema } from '@ioc:Adonis/Core/Validator'

import KategoriValidator from 'App/Validators/KategoriValidator'

export default class KategorisController {
    
public async store({request, response}:HttpContextContract){


const payload = await request.validate(KategoriValidator)

response.status(200).json
({message : "success", data: payload})

}
