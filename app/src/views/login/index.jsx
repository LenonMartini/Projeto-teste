import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './style.css';
import {AuthService} from '../../services/auth';
import {AuthContext} from '../../contexts/Auth/AuthContext';
import { toast  } from 'react-hot-toast';
import SpinnerComponent from '../components/Spinner';


export const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [emailError, setEmailError] = useState('');
    const [senhaError, setSenhaError] = useState('');
    const [loading, setLoading] = useState(false);
    const api = AuthService();
    const auth = useContext(AuthContext); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Lógica de validação dos campos de email e senha
        let valid = true;

        if (!email) {
            setEmailError('Por favor, informe seu e-mail.');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!senha) {
            setSenhaError('Por favor, informe sua senha.');
            valid = false;
        } else {
            setSenhaError('');
        }

        if (valid) {
            setLoading(true);
                try {
                    const response = await auth.signin(email, senha);  
                    if(!response){
                        toast.error('Ocorreu um erro de autenticação');
                        return;
                    }      
                    toast.success('Autenticação realizada com sucesso !!!');
                    
                    
                } catch (error) {
                    console.error('Erro ao fazer login:', error.message);

                
                    if (error.response && error.response.status === 401) {
                        setEmailError('Email ou senha incorretos. Por favor, tente novamente.');
                    } else {
                        setEmailError('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.');
                    }
                }
            setTimeout(() => {
                setLoading(false);
                navigate('/');
            }, 1500);
            
        }
    };

    return (
        <>
            <SpinnerComponent show={loading} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 login-container d-flex justify-content-center align-items-center">
                        <div className="card card-login col-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="card-body p-5">
                                <h5 className="text-center">Acessar com E-mail e Senha</h5>
                                <form onSubmit={handleSubmit} className="form-login mt-5">
                                    <div className="form-group">
                                        <input
                                            className={`form-control ${emailError ? 'is-invalid' : ''}`}
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="E-mail"
                                            autoComplete="off"
                                        />
                                        {emailError && <div className="invalid-feedback">{emailError}</div>}
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            className={`form-control ${senhaError ? 'is-invalid' : ''}`}
                                            type="password"
                                            name="senha"
                                            value={senha}
                                            onChange={(e) => setSenha(e.target.value)}
                                            placeholder="Senha"
                                            autoComplete="off"
                                        />
                                        {senhaError && <div className="invalid-feedback">{senhaError}</div>}
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-12">
                                            <Link to='/reset-password' className="reset-password">Esqueci minha senha</Link>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12 d-grid">
                                            <button
                                                type="submit"
                                                className="btn btn-dark"
                                            >
                                                Acessar
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12 text-center">
                                            Ainda não possui uma conta? <Link to='/register' className="register">Cadastre-se</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
