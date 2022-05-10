<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::middleware('auth')
    ->name('admin.')
    ->prefix('admin')
    ->namespace('Admin')
    ->group(function() {

        Route::get('/home', 'HomeController@index')->name('home');

        Route::resource('posts','PostController');

        Route::resource('users', 'UserController');

        Route::get('/users/{user}/posts', 'UserPostController@index');
});

<<<<<<< HEAD
// Route::get('{any?}',function() {
//     return view('guest.home');
// })->where('any','.*');

Route::fallback(function() {
=======
Route::fallback(function(){
>>>>>>> 482b0535c1d047182c164bd751b194c3d3d17862
    return view('guest.home');
});

