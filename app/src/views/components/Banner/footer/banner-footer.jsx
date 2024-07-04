import React from 'react';
import './style.css';

export const BannerFooter = ({ data }) => {
    
    return (
        <div className="container-banner-footer">
            <div className="row">
                {data.map((banner, index) => (
                    <div className="col-12 p-0 position-relative" key={index}>
                        <img src={banner.src} alt={banner.alt} className="banner-img w-100" />
                        <div className="content-banner-footer">
                            <div className='banner-title'>
                                <p>{banner.title}</p>
                            </div> 
                          
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


