import React from 'react'
import './TitleTypeOne.css'

import victor from '../../assets/victor.png'

const TitleTypeOne = ({className, Title, TitleTop}) => {
  return (
    <div className={`titleTypeOne ${className} `}>
        <small>{TitleTop}</small>
        <div className="heading-h">
            <div className="line"></div>
                <h2>{Title}</h2>
            <div className='line'></div>
        </div>
            <img src={victor} alt="" className='victor' />
    </div>
  )
}

export default TitleTypeOne
