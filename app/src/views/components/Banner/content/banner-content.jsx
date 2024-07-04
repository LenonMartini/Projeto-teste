import React from 'react';
import './style.css';
import {Link} from 'react-router-dom'
export const BannerContent = ({ data }) => {
    
    return (
        <div className="container-banner-content">
            <div className="row">
                {data.map((banner, index) => (
                    <div className="col-12 p-0 position-relative content-banner-container" key={index}>
                        <img src={banner.src} alt={banner.alt} className="banner-img w-100" />
                        <div className="content-banner-content">
                            <div className='banner-title'>
                                <p>{banner.title}</p>
                            </div> 
                            <div className='banner-name'>
                                <p>{banner.name}</p>
                            </div> 
                            <div className="banner-bottom">
                                <a href={banner.link}>Conhecer</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


