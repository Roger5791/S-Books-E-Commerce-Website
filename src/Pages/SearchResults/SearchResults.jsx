import React from 'react'
import '../Shope/Shope.css'
import { bookData } from '../../Data/Data'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../../Components/Search/Search'



const SearchResults = ({addtocart} ) => {

  const [search, setSearch] = useState('');
    
  return (
    <div>
    <div className='container shop-container'>

    {/*==========Search==========*/}

    <Search search={search} setSearch={setSearch}/>

      {/*==========Main Content==============*/}

      {
        bookData.map(product => {
            return (
                <div className="featuredbook-box" /* handleClick={handleClick} */ key={product.id}>
                <Link to={`/details/${product.id}`} className='featurebook'>
                    <img src={product.image} alt="" />
                </Link>

                <div className="featuredbook-info">
                    <Link to={`/details/${product.id}`}><h4>{product.name}</h4></Link>

                    <div><small>{product.writer}</small></div>

                 

                </div>

                <button className='btn cart-btn button btn-border' onClick={() => addtocart (product)}>Add to Cart</button>

            </div>
            )
        })
      }
    </div>

    </div>
  )
}

export default SearchResults
