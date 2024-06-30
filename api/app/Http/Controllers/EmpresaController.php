<?php

namespace App\Http\Controllers;

use App\Http\Resources\EmpresaResource;
use App\Models\Empresa;
use App\Services\EmpresaService;
use Exception;
use Illuminate\Http\Request;

class EmpresaController extends Controller
{   
    private $empresaService;

    public function __construct(EmpresaService $empresaService)
    {
        $this->empresaService = $empresaService;
    }
    public function index(){
        try{
            $response = $this->empresaService->getAll();
            return (new EmpresaResource($response))->additional(['statusCode' => 200]);
        }catch(\Exception $error){
            return response()->json(['error' => $error->getMessage()], 401);
        }
        
    }
   
}
