import React from 'react'
import './PopularBooks.css'

import TitleTypeOne from '../../UI/TitleTypeOne/TitleTypeOne'
import { bookData } from '../../Data/Data'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const PopularBooks = ({addtocart}) => {

    const [activeButton, setActiveButton] = useState('all');

    const handleFilterChange = (category) => {
        setActiveButton(category)
    }

const filterItems = activeButton === 'all' ? bookData : bookData.filter((item) => item.category === activeButton);

  return (
    <section className='popular-books'>
        <div className="container popular-container">
            <TitleTypeOne TitleTop={'Some Quality Items'} Title={'Popular Books'} className={'popular-title'}/>

            <div className="filter-buttons">
                <button className={activeButton === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>
                    All
                </button>

                <button className={activeButton === 'Adventure' ? 'active' : ''} onClick={() => handleFilterChange('Adventure')}>
                    Adventure
                </button>

                <button className={activeButton === 'Business' ? 'active' : ''} onClick={() => handleFilterChange('Business')}>
                    Business
                </button>

                <button className={activeButton === 'Fiction' ? 'active' : ''} onClick={() => handleFilterChange('Fiction')}>
                    Fiction
                </button>

                <button className={activeButton === 'Romance' ? 'active' : ''} onClick={() => handleFilterChange('Romance')}>
                    Romance
                </button>

                <button className={activeButton === 'Technology' ? 'active' : ''} onClick={() => handleFilterChange('Technology')}>
                    Technology
                </button>
            </div>

            <div className="gallery">
                {
                    filterItems.map(product => {
                        return (
                            <div className="gallery-item" key={product.id}>

                                <div className="popular-image">
                                <Link to={`/details/${product.id}`}> <img src={product.image} alt="" /></Link>
                                </div>

                               <div className="popular-info">
                               <Link to={`/details/${product.id}`}><h4>{product.name}</h4></Link> 
                                    <div><small>{product.writer}</small></div>

                                    <h5><span>$ {product.price}</span></h5>
                                </div>
                                <button className='btn cart-btn button btn-border' onClick={() => addtocart (product)}>Add to Cart</button>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    </section>
  )
}

export default PopularBooks
