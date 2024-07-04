<?php

namespace App\Services;

use App\Exceptions\UnauthorizedException;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthService
{
    public function login(string $email, string $password)
    {
        $user = User::where('email', $email)->first();
       
        if (!$user || !Auth::attempt(['email' => $email, 'password' => $password])) {
            throw new UnauthorizedException();
        }
        
        if (!$user->status) {
            throw new UnauthorizedException('Usuário desativado');
        }

        $ttlMinutes = config('auth.jwt.ttl', 60);
        $expiresIn = $ttlMinutes * 60;

        $token = $user->createToken('AuthToken')->plainTextToken;

        // Retorna um objeto stdClass com as propriedades necessárias
        return [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $expiresIn,
            'user' => $user
            
        ];
    }
}
