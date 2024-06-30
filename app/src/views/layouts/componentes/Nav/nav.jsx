import React, { useEffect, useState } from "react"
import './style.css'
import { FaCommentDots, FaFacebookF, FaInstagram, FaRegUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import EmpresaService from "../../../../services/empresa";
import { Link } from "react-router-dom";
export const Nav = () => {
    const [empresa, setEmpresa] = useState();
    useEffect(() => {
        getEmpresa();
    }, []);
    const getEmpresa = async () => {
        const response = await EmpresaService.getAll();
        if (response.data && response.statusCode === 200) {
            console.log(response.data);
            setEmpresa(response.data);
        }
    }
    const handleChat = async () => {
        if (empresa && empresa.link_whatsapp) {
            window.open(empresa.link_whatsapp, '_blank');
        } else {
            console.error('Link do WhatsApp não fornecido.');
        }
    };
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
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 text-lg-center text-md-left text-sm-left text-left">
                                    <FaCommentDots className="icon-social me-2" />
                                    <small className="nav-social-icon-text chat" onClick={handleChat}>Atendimento Online</small>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 text-lg-center text-md-left text-sm-left text-left">
                                    <FaRegUser className="icon-social me-2" />
                                    <Link to="/home" className="link">
                                        <small className="nav-social-icon-text">Minha Conta</small>
                                    </Link>
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

        </>
    )
}