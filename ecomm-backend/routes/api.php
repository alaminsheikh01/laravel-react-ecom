<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// form usercontroller
Route::post("signup", [UserController::class, 'signup']);
Route::post('login', [UserController::class, 'login']);

// form prodcut controoler
Route::post("addproduct", [ProductController::class,'addProduct']);