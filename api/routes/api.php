<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmpresaController;

//Route::apiResource('/empresas', EmpresaController::class);

Route::get('/empresas', [EmpresaController::class, 'index']);


Route::post('/auth', [AuthController::class, 'login']);