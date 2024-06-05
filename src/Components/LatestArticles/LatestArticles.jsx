import React from 'react'
import './LatestArticles.css'

import {  ImFacebook, ImBehance } from 'react-icons/im';
  import {  FiInstagram } from 'react-icons/fi';
  import {  RiTwitterXLine } from 'react-icons/ri';
  import {  GrLinkedinOption } from 'react-icons/gr';
  import { GoArrowRight } from "react-icons/go";

import { lettestArticleData } from '../../Data/Data'
import TitleTypeOne from '../../UI/TitleTypeOne/TitleTypeOne'
import { Link } from 'react-router-dom'

const LatestArticles = () => {
  return (
    <section className='latestArticles'>
        <div className="container latest-container">
            <TitleTypeOne TitleTop={'Read Our Articles'} Title={'Latest Articles'} />

            <div className="latest-article-content">

                {
                    lettestArticleData.map(({titleLink, title, date, instLink, fbLink, twitaLink, inspiration, image}, index)=>{
                        return (
                            <article className='latest-article' key={index}>
                            
                                <div className="article-image">
                                    <img src={image} alt="" />
                                </div>

                                <div className="article-info">
                                    <h5>{date}</h5>
                                    <Link to={titleLink}>
                                        <h3>{title}</h3>
                                    </Link>
                                </div>

                                <div className="latest-article-social">
                                <p>{inspiration}</p>
                                <div className="social-links">
                                    <a href={fbLink}><ImFacebook/></a>
                                    <a href={instLink}><FiInstagram/></a>
                                    <a href={twitaLink}><RiTwitterXLine/></a>
                                    </div>
                                </div>
                            
                            </article>
                        )
                    })

                }

            </div>

                <Link to={'*'} className='btn btn-border' >Read All <GoArrowRight/></Link>

        </div>
    </section>
  )
}

export default LatestArticles
