import React, { useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import './Nav.css'
import Logo from '../../assets/logo.png'
import loggedInLogo from '../../assets/logged-in.png'
import {navLinks, navRight} from '../../Data/Data'
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

import { FiUser } from 'react-icons/fi';
import { VscSearch } from 'react-icons/vsc';
import { BsBag } from 'react-icons/bs';

import { useState } from 'react'
import Search from '../Search/Search'

import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../Firebase/auth'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Nav = ({size}) => {
    
    const [navShow, setNavShow] = useState(false);
    const { userLoggedIn } = useAuth()

    if(innerWidth < 1024){
        window.addEventListener('scroll', () => {
            document.querySelector('.nav-links').classList.add('navHide');
            setNavShow(false)
        })
    };

    window.addEventListener('scroll', ()=>{
        document.querySelector('nav').classList.toggle('navShadow', window.scrollY > 0);
    })


    const handleclick = (e) => {
        e.preventDefault();
        return(
        document.querySelector('.search-container').classList.toggle('search-show'))
    }



    const navigate = useNavigate()

    const [open, setOpen] = useState(false)
    let menuRef = useRef()

    const hide = () => setOpen(false)
    const toggle = () => setOpen(!open)
    const show = () => setOpen(true)

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)){
            setOpen(false);
            }
        }
        document.addEventListener('mousedown', handler)

        return()=>{
            document.removeEventListener('mousedown', handler)
        }

    },[])


  return (
    <>
    <nav>
    <div className="container nav-container">
        <Link to={'/'}>
            <img src={Logo} alt="Logo" className='logo'/>
        </Link>

        <ul className={`nav-links ${navShow ? 'navShow' : 'navHide'}`}>
            {
                navLinks.map(({name, path}, index) => {
                    return (<li key={index}>
                        <NavLink to={ path} className={({isActive}) => 
                           isActive ? 'active' : ''
                        }>{name}</NavLink>
                    </li>)
                })
            }
        </ul>

        <div className="nav-right">
            
            <NavLink to="/shope"  className='search'><VscSearch/></NavLink>
            <Link to="/cart"><BsBag/></Link>
            <span className='cart-size'>{size}</span>
            { userLoggedIn ? <button className='user-icon' onClick={()=> {setOpen(!open)}}><img src={loggedInLogo} alt="" /></button>: 
            
            <button className='user-icon' onClick={()=> {setOpen(!open)}}><FiUser/></button>
            }
            

            <div className={`user-actions ${open? 'user-show' : ''}`} ref={menuRef}>
                <Link><p>Account</p></Link>
                <Link><p>Settings</p></Link> 
                
                {
                    userLoggedIn
                        ?
                <Link onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline'><p>Logout</p></Link> :
                <>
                <Link to='/login' onFocus={show} onClick={toggle} onBlur={hide} ><p>Login</p></Link>
                <Link to='/register' onFocus={show} onClick={toggle} onBlur={hide}><p>Sign Up</p></Link>
                </>
            }
                  
            </div>

            <button className='menu-btn ' onClick={() => 
                setNavShow(!navShow)}>
            {
               !navShow ? <VscMenu/> :
            <GrClose/>
            }
            </button>
        </div>

    </div>
    </nav>
    
    </>
  )
}

export default Nav