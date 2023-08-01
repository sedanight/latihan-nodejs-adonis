import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdminMiddleware {
  public async handle({auth,response}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const user = auth.user?.role === 'admin';
    if (user) {
      await next()
    } else {
      response.unauthorized({message:"anda dilarang masuk!"})
    }
  }
}
