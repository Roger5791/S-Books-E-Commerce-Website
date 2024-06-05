import React from 'react'
import { bookData } from '../../Data/Data';
import { useParams } from 'react-router-dom';
import './Details.css'

import TitleTypeOne from '../../UI/TitleTypeOne/TitleTypeOne'

import { BsArrowReturnRight } from "react-icons/bs";

import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom';
import { breakpoints } from '../../Components/FeaturedBooks/FeaturedBooks';
import { useState, useEffect } from 'react';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



const Details = ({addtocart}) => {

 
  

  const {productId} = useParams()
  const thisProduct = bookData.find(prod => String(prod.id) === productId)

  const [loading, setLoading] =useState(false);


  {/*==========Skeleton-Loading===========*/}

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },1500)
  },[productId])

  return (
    <>

    

    <div className='details-container'>
    <div className="details-content container">
      <div className="details-left">
      {loading ? <Skeleton style={{background:"#dadada"}} height={400} width={360}  /> :
        <img src={thisProduct.image} alt="" />}
      </div>

      <div className="details-right">
      <div>
      {loading ? <Skeleton style={{background:"#dadada"}} height={60}/> :
        <h2>{thisProduct.name}</h2>}
    
        <div>
        {loading ? <Skeleton style={{background:"#dadada"}} />:
        <small>{thisProduct.writer}</small>
      }
        </div>
        </div>

{loading ? <Skeleton style={{background:"#dadada"}} width={700} count={4}/>:
        <h5>
        <small>{thisProduct.info}</small></h5>}

        {loading ? <Skeleton style={{background:"#dadada"}} height={60}/> :
        <h5><span>$ {thisProduct.price}</span></h5>}

        
       

        {loading ? <Skeleton style={{background:"#dadada"}} height={60}/> :
        <div className="detail-actions">
          <input type="number"  id="quantity" name="quantity" min={1} max={10} placeholder='1'/>
          <button className='btn btn-border cart-btn'  onClick={() => addtocart (thisProduct)}>Add to Cart</button>
        </div>
        }

      </div>
    </div>


    
    <section className='featured'>
        <div className="container featured-book-container">
            <TitleTypeOne TitleTop={'Some Quality Items'} Title={'Recommended Books'}/>
        
            {/*==========Swiper==============*/}

        <Swiper spaceBetween={50} slidesPerView={4} 
        modules={[ Pagination,]} 
        loop={true}
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



    </div>
    


    </>
    
  )
}

export default Details

