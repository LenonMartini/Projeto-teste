import React, { useEffect, useState, useContext } from "react";
import './style.css';
import { FaCommentDots, FaFacebookF, FaInstagram, FaRegUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import EmpresaService from "../../../../services/empresa";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../../contexts/Auth/AuthContext';
import { useNavigate } from "react-router-dom";
import SpinnerComponent from '../../../components/Spinner';
import toast from "react-hot-toast";
export const Nav = () => {
    const [empresa, setEmpresa] = useState(null); // Estado de empresa inicializado como null

    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
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
    const handleLogout = async() => {
        setLoading(true);
           await auth.signout();
        setTimeout(() => {
            setLoading(false);
        }, 1500);
        
    }

    return (
        <>
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
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 d-flex align-items-center justify-content-lg-center justify-content-md-start justify-content-sm-start justify-content-start">
                                    <FaCommentDots className="icon-social me-2" />
                                    <small className="nav-social-icon-text chat" onClick={handleChat}>Atendimento Online</small>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 d-flex align-items-center justify-content-lg-center justify-content-md-start justify-content-sm-start justify-content-start">
                                    {auth.user && auth.user.user ? (
                                        <div className="dropdown nav-social-icon-text profile">
                                            <a
                                                href="#"
                                                className="dropdown-toggle capitalize-text d-flex align-items-center"
                                                onClick={(e) => { e.preventDefault(); }}
                                                id="dropdownMenuButton"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <FaRegUser className="icon-social me-2" />
                                                {auth.user.user.nome}
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
                                                <li><a className="dropdown-item" href="#">Perfil</a></li>
                                                <li><a className="dropdown-item" href="#">Meus Pedidos</a></li>
                                                <li>
                                                    <a 
                                                        className="dropdown-item" 
                                                        href="#"
                                                        onClick={handleLogout}
                                                    >
                                                            Sair
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <>
                                            <FaRegUser className="icon-social me-2" />
                                            <small
                                                onClick={handleProfile}
                                                className="nav-social-icon-text profile"
                                            >
                                                Minha Conta
                                            </small>
                                        </>
                                    )}
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 d-flex align-items-center justify-content-lg-center justify-content-md-start justify-content-sm-start justify-content-start">
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
            <SpinnerComponent show={loading} />
        </>
    );
}
