import React from "react";
import { Link } from "react-router-dom";
import './style.css';
export const CardArea = ({data}) => {
 
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5 mb-5">
                        <div className="row">
                            {data.map((item, index) => (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-2 d-flex justify-content-center align-items-center" key={index}>
                                    <Link to={'#'}>
                                        <div className="card-area">
                                            <img src={item.src} className="card-area-img" alt={item.name} />
                                            <div className="card-area-name">
                                                <p>{item.name}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>                  
                </div>
            </div>

        </>
    );
}