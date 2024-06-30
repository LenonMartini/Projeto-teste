<?php

namespace App\Services;
use App\Models\Empresa;

class EmpresaService {

    public function getAll(){
    
        $empresa = Empresa::where('id', 1)->first();
        return $empresa;
    }

}