import React from 'react'
import './TitleTypeTwo.css'

import victor from '../../assets/victor.png'

const TitleTypeTwo = ({className, Title}) => {
  return (
    <div className={`titleTypeTwo ${className} `}>
       <h2>{Title}</h2>
            <img src={victor} alt="" className='victor' />
    </div>
  )
}

export default TitleTypeTwo
