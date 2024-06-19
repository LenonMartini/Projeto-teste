import React from "react";
import { Link } from 'react-router-dom';
import './style.css';
import { FaAngleDown } from 'react-icons/fa';
export const NavBar = () => {
    const menu = {
        items: [
            { label: 'Home', link: '#' },
            { 
                label: 'About',
                submenu: [
                    { label: 'Company', link: '#' },
                    { label: 'Team', link: '#' },
                    { label: 'Contact', link: '#' }
                ]
            },
            { 
                label: 'Services',
                submenu: [
                    { label: 'Service 1', link: '#' },
                    { label: 'Service 2', link: '#' }
                ]
            },
            { label: 'Contact', link: '#' }
        ]
    };
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link to="#" className="navbar-brand link-orange">Home</Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                         
                            {menu.items.map((item, index) => (
                                <li key={index} className={`nav-item ${item.submenu ? 'dropdown' : ''}`}>
                                    <a className={`nav-link ${item.submenu ? 'dropdown-toggle' : ''}`} href={item.link} id={`menu-${index}`} role="button" data-bs-toggle={item.submenu ? 'dropdown' : ''} aria-expanded="false">
                                        {item.label}
                                        
                                    </a>
                                    {item.submenu && (
                                        <ul className="dropdown-menu" aria-labelledby={`menu-${index}`}>
                                            {item.submenu.map((subitem, subindex) => (
                                                <li key={subindex}>
                                                    <a className="dropdown-item" href={subitem.link}>{subitem.label}</a>
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