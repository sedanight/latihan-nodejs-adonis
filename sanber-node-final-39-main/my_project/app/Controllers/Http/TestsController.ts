import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TestsController {

  /**
		* @swagger
		* /api/hello:
		* get:
		*     tags:
		*       - helo
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



  /**
   * @swagger
   * endpoint:
   *   method:
   *     tags:
   *  */
  public async hello({request,response}:HttpContextContract){
    const name =request.input('name','Guess')
    return response.send({message:'hello '+ name})
  }
}
