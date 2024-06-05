import React from 'react'
import Header from '../Components/Header/Header'
import Brands from '../Components/Brands/Brands'
import FeaturedBooks from '../Components/FeaturedBooks/FeaturedBooks'
import BestSellingBook from '../Components/BestSelling/BestSellingBook'
import PopularBooks from '../Components/PopularBooks/PopularBooks'
import Quotes from '../Components/Quotes/Quotes'
import LatestArticles from '../Components/LatestArticles/LatestArticles'
import Nav from '../Components/Nav/Nav'
import { useState } from 'react'
import { useAuth } from '../contexts/authContext'



const Home = ({addtocart}) => {

  const { currentUser } = useAuth()

  const [cart, setCart] = useState([])
  

  return (
     

    <>
    
    <Header />
    <Brands />
    <FeaturedBooks addtocart={addtocart}/>
    <BestSellingBook />
    <PopularBooks addtocart={addtocart}/>
    <Quotes />
    <LatestArticles/>
    </>

   
  )
}

export default Home