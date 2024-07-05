<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmpresaController;

Route::middleware('api')->group(function () {

    Route::prefix('/auth')->group(function() {// Correção: 'function' estava digitado como 'fucntion'
        
        Route::post('/login', [AuthController::class, 'login']);
        Route::middleware('auth:api')->group(function () {
            Route::get('/logout', [AuthController::class, 'logout']);
        });
    });
    Route::get('/empresas', [EmpresaController::class, 'index']);
   
        

});
