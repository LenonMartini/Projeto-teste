import React, { useEffect, useState, useContext } from "react";
import './style.css';
import { FaCommentDots, FaFacebookF, FaInstagram, FaRegUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import EmpresaService from "../../../../services/empresa";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../../contexts/Auth/AuthContext';
import { useNavigate } from "react-router-dom";

export const Nav = () => {
    const [empresa, setEmpresa] = useState(null); // Estado de empresa inicializado como null

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        getEmpresa(); // Chama função para obter dados da empresa

        if (auth.user) {
            console.log(auth.user.user.nome);

        }


    }, [auth]); // Executa o efeito sempre que auth mudar

    const getEmpresa = async () => {
        try {
            const response = await EmpresaService.getAll();
            if (response.data && response.statusCode === 200) {

                setEmpresa(response.data); // Define o estado de empresa com os dados obtidos
            }
        } catch (error) {
            console.error("Erro ao obter dados da empresa:", error);
        }
    }

    const handleChat = () => {
        if (empresa && empresa.link_whatsapp) {
            window.open(empresa.link_whatsapp, '_blank');
        } else {
            console.error('Link do WhatsApp não fornecido.');
        }
    };

    const handleProfile = () => {

        if (auth.user !== null) {
            navigate('/profile'); // Redireciona para perfil se houver usuário autenticado
        } else {
            navigate('/login'); // Redireciona para login se não houver usuário autenticado
        }
    }

    return (
        <ul className="nav">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-3 ">
                        <div className="content-logo">
                            <img src="logo.png" alt="logo" className="logo" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-3">
                        <div className="nav-form d-flex align-items-start justify-content-between">
                            <div className="social-text align-self-start">
                                <p>Faça seu login ou cadastre-se</p>
                            </div>
                            <div className="social-icons ">
                                <a href={empresa && empresa.facebook} target="__blank" className="me-2">
                                    <FaFacebookF className="me-2" />
                                </a>
                                <a href={empresa && empresa.instagram} target="__blank" className="me-2">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Busque aqui..."
                            />
                            <FaSearch className="icon-search" />
                        </div>

                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-6">
                        <div className="row nav-social">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 text-lg-center text-md-left text-sm-left text-left">
                                <FaCommentDots className="icon-social me-2" />
                                <small className="nav-social-icon-text chat" onClick={handleChat}>Atendimento Online</small>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 text-lg-center text-md-left text-sm-left text-left">
                                <div className="row">
                                  
                                    {auth.user && auth.user.user ? (
                                       <ul class="navbar-nav">
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <FaRegUser className="icon-social me-2" /> Dropdown
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    ) : (
                                        <>
                                            <FaRegUser className="icon-social me-2" />
                                            <small
                                                onClick={handleProfile}  // ou o caminho desejado para o login
                                                className="nav-social-icon-text profile"
                                            >
                                                Minha Conta
                                            </small>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 text-lg-center text-md-left text-sm-left text-left">
                                <FaShoppingCart className="icon-social me-2" />
                                <Link to="/home" className="link">
                                    <small className="nav-social-icon-text">0 Items</small>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </ul>
    );
}
