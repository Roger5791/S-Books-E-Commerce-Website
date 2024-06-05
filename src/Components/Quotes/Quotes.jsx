import React from 'react'
import './Quotes.css'

import TitleTypeTwo from '../../UI/TitleTypeTwo/TitleTypeTwo'
import { quoteData } from '../../Data/Data'


const Quotes = () => {
  return (
    <section className='quotes'>
        <div className="container quotes-container">
            <TitleTypeTwo Title={'Quote of the Day'} className={'quote-title'} />

            {
            quoteData.map(({quote, speaker}, index) =>{
                return (
                    <article key={index}>
                        <p>{quote}</p>
                        <h5>{speaker}</h5>
                    </article>
                )
            })
        }

        </div>
    </section>
  )
}

export default Quotes
