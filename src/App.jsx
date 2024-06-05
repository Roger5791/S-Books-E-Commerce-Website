
import './App.css'

import { BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './Pages/Home';
import NotFound from './Pages/Not Found/NotFound';

import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

import ScrollToTop from './UI/scrollToTop/ScrollToTop';

import React from 'react'
import Details from "./Pages/Details/Details";
import Shope from './Pages/Shope/Shope';
import Cart from './Pages/Cart/Cart';

import { useState } from 'react';
import Search from './Components/Search/Search';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login';
import { AuthProvider } from './contexts/authContext';
import Register from './Pages/SignUp/Register';
import Checkout from './Pages/Checkout/Checkout';





const App = () => {
  const [cartItem, setCartItem] =useState([]);
  const [search, setSearch] = useState('');

  {/*============CART=============*/}

  const addtocart = (item) => {
      const exist = cartItem.find((x) => {
    
        return x.id === item.id;
        
      })
      if(exist){
        toast.error('Item Already Added')
      }
      else{
        setCartItem([...cartItem,{...item, quantity:1}])
        toast.success('Product Added to Cart')
      }
  }

  return (
    
    <BrowserRouter>
    <ScrollToTop />
    <AuthProvider>
      <Nav size={cartItem.length}/>
    </AuthProvider>
    <ToastContainer
    position="bottom-left"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
   
    theme="dark"
    />
        <Routes>
      
            <Route path="/" element={<AuthProvider><Home addtocart={addtocart} /></AuthProvider>} />
            <Route path="*" element={<NotFound />} />
            <Route path="/details/:productId" element={<Details addtocart={addtocart} />} />
            <Route path="/shope" element={<Shope addtocart={addtocart} />} />
            <Route path="/cart" element={<AuthProvider><Cart addtocart={addtocart} cartItem={cartItem} setCartItem={setCartItem}/></AuthProvider>} />
            
            <Route path='/checkout' element={<Checkout /> }/> 
            
            <Route path='/login' element={<AuthProvider><Login />  </AuthProvider>}/> 
            <Route path='/register' element={<AuthProvider><Register />  </AuthProvider>}/> 
          
        
        </Routes>
        <Footer/>

    </BrowserRouter>
  )
}

export default App