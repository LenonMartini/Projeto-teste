import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './style.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

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

        if (!password) {
            setPasswordError('Por favor, informe sua senha.');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            // Lógica de envio dos dados para autenticação
            /*console.log('Email:', email);
            console.log('Senha:', password);

            // Simulação de lógica de autenticação
            if (email === 'admin@example.com' && password === 'admin') {
                // Lógica de sucesso de autenticação (redirecionamento, armazenamento de token, etc.)
                console.log('Login bem-sucedido!');
            } else {
                // Exemplo de mensagem de erro para email/senha incorretos
                setEmailError('Email ou senha incorretos. Por favor, tente novamente.');
            }*/
        }
    };

    return (
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
                                        autocomplete='off'
                                    />
                                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                                </div>
                                <div className="form-group mt-3">
                                    <input
                                        className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Senha"
                                       
                                    />
                                    {passwordError && <div className="invalid-feedback">{passwordError}</div>}
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
    );
};
