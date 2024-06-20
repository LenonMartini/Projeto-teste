import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaTag, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'; // Importe seus estilos personalizados aqui

export const SwiperOtletComponent = ({ data }) => {
  const swiperRef = React.useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-center mt-2 mb-3">          
            <h4 className="text-uppercase">{data[0].title}</h4>
            <FaAngleLeft className="swiper-button-prev" onClick={goPrev} />
            <FaAngleRight className="swiper-button-next" onClick={goNext} />
        </div>
      </div>
      
      <div className="row">
        <div className="col-12">
          <Swiper
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={4}
            pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data[0].items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card card-swiper">
                  <div className="content-icon-outlet">
                    <div className="balloon">
                      <FaTag className="tag-icon" style={{ transform: 'rotateY(180deg)' }} />
                      <span className="balloon-text">Outlet</span>
                    </div>
                  </div>
                  <img src={item.src} className="card-img-top" alt={item.name} />
                  <div className="card-body w-100 text-center">
                    <h4 className="card-title card-swiper-title">{item.name}</h4>
                    <h4 className="card-title card-swiper-cod">cod: {item.cod}</h4>
                    <div className="row align-items-center">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <h4 className="card-swiper-price-original">de R$ {item.original_price}</h4>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <h4 className="card-swiper-price">por R$ {item.price}</h4>
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};


