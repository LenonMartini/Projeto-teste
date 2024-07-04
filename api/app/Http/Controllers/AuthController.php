<?php

namespace App\Http\Controllers;

use App\Exceptions\UnauthorizedException;
use App\Http\Requests\Auth\AuthRequest;
use App\Http\Resources\Auth\AuthResource;
use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{   
    protected $authService;
    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }
    public function login(AuthRequest $request){
        try{
           
            $input = $request->validated();
            $response = $this->authService->login($input['email'], $input['senha']);
            if(!$response){
                throw new UnauthorizedException();
            }
        
            return (new AuthResource($response))->additional(['statusCode' => 200]);

        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }
}
