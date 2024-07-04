import { useState, useEffect } from "react";
import { FaTag, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './style.css';

export const Carousel = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [items, setItems] = useState(data[0].items.slice(0, 4));

    const itemsPerPage = 4;

    useEffect(() => {
        console.log(data[0]);
    }, [data]);

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - itemsPerPage);
            setItems(data[0].items.slice(currentIndex - itemsPerPage, currentIndex));
        }
    };

    const handleNextClick = () => {
        if (currentIndex + itemsPerPage < data[0].items.length) {
            setCurrentIndex(prevIndex => prevIndex + itemsPerPage);
            setItems(data[0].items.slice(currentIndex + itemsPerPage, currentIndex + 2 * itemsPerPage));
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center">
                    <h4 className="title-carousel">{data[0].title}</h4>
                    <FaAngleLeft className="ms-2" onClick={handlePrevClick} style={{ cursor: 'pointer' }} />
                    <FaAngleRight className="ms-2" onClick={handleNextClick} style={{ cursor: 'pointer' }} />
                </div>
            </div>
            <div className="container">
                <div className="row mt-2">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="row content-carousel d-flex justify-content-center">
                            {items.map((item, index) => (
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 p-1" key={index}>
                                    <div className="card card-item">
                                        <div className="content-icon-outlet">
                                            <div className="balloon">
                                                <FaTag className="tag-icon" style={{ transform: 'rotateY(180deg)' }} />
                                                <span className="balloon-text">Outlet</span>
                                            </div>
                                        </div>
                                        <img src={item.src} className="card-img-top" alt="Card image" />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            {/* Outros conteúdos do card aqui */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
