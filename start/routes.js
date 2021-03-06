'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('admin', 'AdminController.index')

Route.get('sitelab', 'SitelabController.index')
Route.post('sitelab', 'SitelabController.store')

Route.get('analyserlab', 'AnalyserlabController.index')
Route.post('analyserlab', 'AnalyserlabController.store')

Route.get('patient', 'PatientController.index')
Route.post('patient', 'PatientController.store')
