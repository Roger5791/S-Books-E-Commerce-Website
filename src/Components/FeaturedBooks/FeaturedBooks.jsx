import React, {useState} from 'react'
import './FeaturedBooks.css'

import TitleTypeOne from '../../UI/TitleTypeOne/TitleTypeOne'

import { BsArrowReturnRight } from "react-icons/bs";

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { bookData } from '../../Data/Data';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


export const breakpoints ={
    1024: {
        slidesPerView:4,
        spaceBetweenSlides:30
    },

    768: {
        slidesPerView:3,
        spaceBetweenSlides:20
    },

    480: {
        slidesPerView:2,
        spaceBetweenSlides:10
    },

    0: {
        slidesPerView:1,
        spaceBetweenSlides:0
    }
}







const FeaturedBooks = ({addtocart}) => {

    const [cartItem, setCartItem] =useState([]);
 
  return (
    <section className='featured'>
        <div className="container featured-book-container">
            <TitleTypeOne TitleTop={'Some Quality Items'} Title={'Featured Books'}/>
        

{/*=========Swiper==========*/}

        <Swiper spaceBetween={50} slidesPerView={4} 
        modules={[ Pagination, Autoplay]} 
        loop={true} autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        pagination={{el:'.swiper-pagination', clickable:true}} breakpoints={breakpoints}>
        
            {
                bookData.map(product =>{
                    return (
                        <SwiperSlide key={product.id}>
                            <div className="featuredbook-box">
                                <Link to={`/details/${product.id}`} className='featurebook'>
                                    <img src={product.image} alt="" />
                                </Link>

                                <div className="featuredbook-info">
                                    <Link to={`/details/${product.id}`}><h4>{product.name}</h4></Link>

                                    <div><small>{product.writer}</small></div>

                                    <h5><span>$ {product.price}</span></h5>

                                </div>

                                <button className='btn cart-btn button btn-border' onClick={() => addtocart (product)}>Add to Cart</button>

                            </div>
                        </SwiperSlide>
                    )
                })
            }

            <div className="feature-border"></div>

            <div className="swiper-pagination"></div>

            <Link to='/shope' className='btn btn-border feature-btn'>View all Books <BsArrowReturnRight /></Link>
        
        </Swiper>
        </div>
    </section>
  )
}

export default FeaturedBooks
