import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom'

import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import headerShape from '../../assets/header-shape.svg'

import { bookData } from '../../Data/Data'

import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Header = () => {
  return (
    <header>
    <div className="header-container">
    
        <Swiper spaceBetween={50} slidesPerView={1} 
        modules={[Navigation, Pagination, Autoplay]} 
        loop={true} autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        navigation={
           { prevEl:'.button-prev-slide',
            nextEl:'.button-next-slide'}
        } 
        pagination={{el:'.swiper-pagination', clickable:true}}>
        
            {
                bookData.map(product => {
                    return (
                        <SwiperSlide key={product.id}>
                            <div className="header-wrapper container">
                                <div className="header-left">
                                    <h1>{product.name}</h1>
                                    <p>{product.info}</p>
                                    <a className='btn btn-border' href={`details/${product.id}`}>
                                        Learn More
                                    </a>
                                </div>

                                <div className="header-right">
                                    <img src={product.image} alt="" />
                                </div>

                            </div>
                        </SwiperSlide>
                    )
            })
            }

            <div className="slider-button">
                <div className="button-prev-slide slidebutton">
                    <GoArrowLeft/>
                </div>
                <div className="button-next-slide slidebutton">
                    <GoArrowRight/>
                </div>
            </div>

            <div className="container">
                <div className="swiper-pagination">

                </div>
            </div>
        
        </Swiper>


        <div className="header-shape">
            <img src={headerShape} alt="" />
        </div>

    </div>
    </header>
  )
}

export default Header