import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import './style.css';
export const Footer = () => {
    return (
        <footer className="pt-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                        <h5 className="text-uppercase">Institucional</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Sobre Nós</a></li>
                            <li><a href="#">Como Chegar</a></li>
                            <li><a href="#">Trocas e Devoluções</a></li>
                            <li><a href="#">Garantias</a></li>
                           
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <h5 className="text-uppercase">Central de Atendimento</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Televendas: 3025 3440</a></li>
                            <li><a href="#">E-mail: contato@samsung.com.br</a></li>
                            <li><a href="#">Lunes a viernes</a></li>
                            <li><a href="#">07:00 a las 17:00s</a></li>
                           
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                        <h5 className="text-uppercase">Whatsapp</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">+595 983 528 900</a></li>
                                                        
                        </ul>
                        <h5 className="text-uppercase">Redes Sociais</h5>
                        <div className='d-flex gap-3'>
                            <FaFacebookF />
                            <FaInstagram />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                        <h5 className="text-uppercase">Forma de pagamento</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#">
                                    <img src='meiopagamento.png' />
                                </a>
                            </li>
                           
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 p-3 d-flex justify-content-center">
                       
                        <img src='brasao.png' />
                    </div>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="mt-4">&copy; 2024 Empresa. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}