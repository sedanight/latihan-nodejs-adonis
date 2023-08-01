/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
//import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.group(()=>{

  Route.resource('kategori', 'KategorisController').apiOnly().middleware({'*':['isAdmin']})
  Route.resource('buku','BukusController').apiOnly()

  Route.post('/register', 'AuthController.register').as('auth.register')
  Route.post('/login','AuthController.login')
  Route.get('/me','AuthController.me').middleware('auth')

  Route.post('/profile','AuthController.UpdateProfile').middleware('auth')

  Route.post('/buku/:id/peminjaman','PeminjamanController.store').middleware('auth')
  Route.get('/peminjaman','PeminjamanController.index').middleware('auth')
  Route.get('/peminjaman/:id','PeminjamanController.index').middleware('auth')

  Route.get('/hello','TestsController.hello')

}).prefix('/api')

// Route.get('health', async ({ response }))=> {
//   const report = await HealthCheck.getReport()
//   return report.healthy
//     ? response.ok(report)
//     : response.badRequest(report)
// })
