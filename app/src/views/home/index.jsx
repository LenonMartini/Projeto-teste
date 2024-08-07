import React, { useEffect, useState } from 'react';
import './style.css';
import { BannerHeader } from '../components/Banner/header/banner-header';
import { SwiperOtletComponent } from '../components/Swiper/outlet/swiper-outlet';
import { SwiperCategoriesComponent } from '../components/Swiper/categories/swiper-categories';
import { BannerContent } from '../components/Banner/content/banner-content';
import { BannerFooter } from '../components/Banner/footer/banner-footer';
import { CardArea } from '../components/Card/area/card-area';
import { CardDetail } from '../components/Card/detalhes/card-detalhe';
import { Footer } from '../layouts/componentes/Footer/footer';
import EmpresaService from '../../services/empresa';

export const Home = () => {
  const [empresa, setEmpresa] = useState();
  const BannerHeaderData = [
    {
        cod: 1,
        name: 'Kit Cone', 
        src: 'banner1.png', 
        title: 'Kit Cone',
        category: 'Pendentes',
        link: 'https://www.google.com/',
        alt: 'Banner 1', 
        ordem: 1,
    }      
];
  const BannerCenter = [
    {
      cod: 2,
      name:'Luminarias Loft Retrô', 
      src: 'banner2.png', 
      title: 'Valorize seu Ambiente',
      category:'Lustres',
      link: 'https://www.google.com/',
      alt: 'Banner 2', 
      ordem: 2 
      
    }
  ];
  const BannerFooterData = [ 
    { 
      cod: 3,
      name:'Luminarias Loft Retrô', 
      src: 'banner3.png', 
      title: 'Diversão e Satisfação para seus ambientes',
      category:'',
      link: 'https://www.google.com/',
      alt: 'Banner 3', 
      ordem: 3 
    }
  ]
  const outlets = [
      {
          title: 'Promoções',
          items: [
              { cod: 1234, name: 'Produto 1', src: 'img/image1.png', original_price: '9800.00' , price: 950.00, promotion: true},
              { cod: 12345, name: 'Produto 2', src: 'img/image2.png', original_price: '9800.00', price: 950.00, promotion: true},
              { cod: 123456, name: 'Produto 3', src: 'img/image3.png', original_price: '9800.00', price: 950.00, promotion: true},
              { cod: 1234567, name: 'Produto 4', src: 'img/image4.png', original_price: '9800.00', price: 950.00, promotion: true},
              { cod: 9876, name: 'Produto 5', src: 'img/image5.png', original_price: '9800.00' , price: 950.00, promotion: true},
              { cod: 98765, name: 'Produto 6', src: 'img/image6.png', original_price: '9800.00', price: 950.00, promotion: true},
              { cod: 987654, name: 'Produto 7', src: 'img/image7.png', original_price: '9800.00', price: 950.00, promotion: true},
              { cod: 9876543, name: 'Produto 8', src: 'img/image8.png', original_price: '9800.00', price: 950.00, promotion: true},
          ],
      },
     
  ]
  const categories = [
    {
        title: 'Lustres',
        items: [
            { cod: 1234, name: 'Luminaria Pendente Meia Bola', src: 'img/lustre.png'},
            { cod: 12345, name: 'Arandela de Madeira Pendente', src: 'img/lustre.png'},
            { cod: 123456, name: 'Lustre Space', src: 'img/lustre.png'},
            { cod: 1234567, name: 'Pendente Íris Castanho', src: 'img/lustre.png'},
            { cod: 9876, name: 'Produto 5', src: 'img/lustre.png'},
            { cod: 98765, name: 'Produto 6', src: 'img/lustre.png'},
            { cod: 987654, name: 'Produto 7', src: 'img/lustre.png'},
            { cod: 9876543, name: 'Produto 8', src: 'img/lustre.png'},
        ],
    },
   
  ]
  const areas = [
   
          { cod: 1, name: 'Sala de Estar', src: 'img/salaestar.png'},
          { cod: 2, name: 'Varanda', src: 'img/varanda.png'},
          { cod: 3, name: 'Banheiro', src: 'img/banheiro.png'},
          { cod: 4, name: 'Jardim', src: 'img/jardim.png'},
          { cod: 5, name: 'Cozinha', src: 'img/cozinha.png'},
          { cod: 6, name: 'Quarto', src: 'img/quarto.png'},
          
     
  ]
  useEffect(() => {
    getEmpresa();
  }, []);
  const getEmpresa = async() =>{
    const response = await EmpresaService.getAll();
    if(response.data && response.statusCode === 200){
      setEmpresa(response.data);
    }
  } 
  return (
    <>
        <BannerHeader data={BannerHeaderData} />
        <div className='content-first '>              
          <SwiperOtletComponent data={outlets} />
        </div>
        <div className='content-two'>
          <SwiperCategoriesComponent data={categories} />
        </div>
        <BannerContent data={BannerCenter} />
        <div className='content-three'>         
            <CardArea data={areas}  />    
        </div>
        <BannerFooter data={BannerFooterData} />
        <div className='content-foor'>
          <CardDetail />
        </div>
        <Footer /> 
    </>
  );
};
