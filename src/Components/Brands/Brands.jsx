import React from 'react'
import './Brands.css'

import { brandsData } from '../../Data/Data'

const Brands = () => {
  return (
   <div className='brands'>
    <div className="container brands-container">
    
        {
            brandsData.map(({img}, index) => {
                return (
                    <div className="brand" key={index}>
                        <img src={img} alt="" />
                    </div>
                )
                })
        }

    </div>
   </div>
  )
}

export default Brands
