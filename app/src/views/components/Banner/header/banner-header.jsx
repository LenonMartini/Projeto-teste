import React from 'react';
import './style.css';
export const BannerHeader = ({ data }) => {
    
    return (
        <div className="container-fluid">
            <div className="row">
                {data.map((banner, index) => (
                    <div className="col-12 p-0 position-relative" key={index}>
                        <img src={banner.src} alt={banner.alt} className="banner-img w-100" />
                        <div className="content-banner">
                            <div className='banner-name'>
                                <span className='me-2'>{banner.name.split(' ')[0]}</span> 
                                <span className="destaque">{banner.name.split(' ')[1]}</span> 
                            </div> 
                            <div className='banner-category'>
                                <p>{banner.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


