import React from 'react'
import './BestSellingBook.css'

import TitleTypeTwo from '../../UI/TitleTypeTwo/TitleTypeTwo'
import TreeShape from '../../assets/treeShape.png'

import { Link } from 'react-router-dom'

import { bestSellingData } from '../../Data/Data'

import { GoArrowRight } from "react-icons/go";


const BestSellingBook = () => {
  return (
    <section className='bestSelling'>

        <div className="treeShape">
            <img src={TreeShape} alt="" />
        </div>

      

            {
            bestSellingData.map(product => {
                return (
                    <div className="container best-selling-container" key={product.id}>

                   

                        <div className="selling-book-left" >
                            <img src={product.image} alt="" />
                        </div>

                        <div className="selling-book-right">
                        <TitleTypeTwo Title={'Best Selling Book'} className="sellingBookTitle" />

                        <div><small>{product.writer}</small></div>
                        <h3>{product.name}</h3>
                        <p>{product.info}</p>
                        <h5><span>{product.price}</span></h5>
                        <Link to={`details/${product.id}`} className='btn '>Buy Now <GoArrowRight/></Link>

                        </div>

                    </div>
                    
                )
            })

            }

            

      
    </section>
  )
}

export default BestSellingBook
