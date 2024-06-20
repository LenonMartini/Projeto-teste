import React from "react";
import { Link } from 'react-router-dom';
import './style.css';
import { FaAngleDown } from 'react-icons/fa';
export const NavBar = () => {
    const menu = {
        items: [
            { 
                label: 'Home', 
                link: 'home',
                class:'link-orange' 
            },
            { 
                label: 'About',
                class:'', 
                submenu: [
                    { label: 'Company', link: 'companies' },
                    { label: 'Team', link: 'teams' },
                    { label: 'Contact', link: 'contact' }
                ]
            },
            { 
                label: 'Services',
                class:'', 
                submenu: [
                    { label: 'Service 1', link: '#' },
                    { label: 'Service 2', link: '#' }
                ]
            },
            { label: 'Contact', link: 'contact', class:'link-orange'}
        ]
    };
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                                    
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                                      
                            {menu.items.map((item, index) => (
                                <li key={index} className={`nav-item ${item.submenu ? 'dropdown' : ''}`}>
                                    <Link className={`nav-link ${item.class} ${item.submenu ? 'dropdown-toggle' : ''}`} to={item.link} id={`menu-${index}`} role="button" data-bs-toggle={item.submenu ? 'dropdown' : ''} aria-expanded="false">
                                        {item.label}
                                        {item.submenu && <FaAngleDown className="ms-2"/>}
                                    </Link>
                                    {item.submenu && (
                                        <ul className="dropdown-menu" aria-labelledby={`menu-${index}`}>
                                            {item.submenu.map((subitem, subindex) => (
                                                <li key={subindex}>
                                                    <Link className="dropdown-item" to={subitem.link}>{subitem.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                               
                           
                        </ul>
                
                    </div>
                </div>
            </nav>
        </>
    )
}