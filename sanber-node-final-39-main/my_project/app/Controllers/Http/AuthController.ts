import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthValidator from 'App/Validators/AuthValidator'
import User from 'App/Models/User'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  /**
		* @swagger
		* /api/register:
		* post:
		*     tags:
		*       - user
		*     requestBody:
		*       required: true
		*       content:
		*         application/json:
		*           description: User payload
		*           schema:
		*             type: object
		*             properties:
		*               phone:
		*                 type: string
		*                 example: 'James Bond'
		*                 required: true
		*
		*     responses:
		*       200:
		*         description: Success
		*         content:
		*           application/json:
		*             schema:
		*               $ref: '#/components/schemas/User'
		*/
  public async register({request,response}:HttpContextContract){
    try
    {
      const DataValidation = await request.validate(AuthValidator)
      await User.create(DataValidation)
      return response.created({message:'register berhasil'})
    }
    catch (error)
    {
      return response.unprocessableEntity({message: error})
    }
  }

  public async login({request,response, auth}:HttpContextContract){
    try {
      const LoginValidation = schema.create({
        email:schema.string(),
        password:schema.string(),
      })
      await request.validate({schema: LoginValidation})
      const email= request.input('email');
      const password= request.input('password');
      const token = await auth.use('api').attempt(email,password,{
        expiresIn:'70 days'
      })
      return response.ok({
        message:'Login berhasil',
        token
      })
    }
    catch (error)
    {
      if(error.guard){
        return response.badRequest({message:"Login gagal",error:error.message})
      }else{
        return response.badRequest({message:"Login validasi",error:error.message})
      }
    }
  }

  public async me({response,auth}:HttpContextContract){
    const user = auth.user
    return response.ok({message:user})
  }

  public async UpdateProfile({auth,request,response}:HttpContextContract){
    const userData = auth.user
    const validateProfile = schema.create({
      bio:schema.string(),
      alamat:schema.string()
    })
    await request.validate({schema:validateProfile})
    const bio = request.input('bio')
    const alamat= request.input('alamat')

    const persistancePayload={
      alamat,
      bio
    }
    await userData?.related('profile').updateOrCreate({},persistancePayload)
    //await User.updateOrCreate(searchPayload,persistancePayload)
    response.ok({message:"berhasil terupdate"})
  }

  // public async handle({request,response}:HttpContextContract,next:()=>Promise<void>){
  //   if (notAuthenticated) {
  //     response.unauthorized({error:"Must be logged in!"})
  //     return
  //   }
  //   await next()
  // }
}
