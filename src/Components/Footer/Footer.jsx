import React from 'react'
import './Footer.css'

import { FootersLinksData } from '../../Data/Data'
import { Link } from 'react-router-dom';

import {  ImFacebook, ImBehance } from 'react-icons/im';
  import {  FiInstagram } from 'react-icons/fi';
  import {  RiTwitterXLine } from 'react-icons/ri';
  import {  GrLinkedinOption } from 'react-icons/gr';


const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">

        <div>
          <h4>About Us</h4>

          <ul className="about-params param-links">
          
              {
                FootersLinksData.Aboutus.map(({linkname, link}, index)=> {
                  return (
                    <li key={index}>
                      <Link to={link}>{linkname}</Link>
                    </li>
                  )
                })
              }

          </ul>

        </div>


        <div>
          <h4>Discover</h4>

          <ul className="discover-params param-links">
          
              {
                FootersLinksData.Discover.map(({linkname, link}, index)=> {
                  return (
                    <li key={index}>
                      <Link to={link}>{linkname}</Link>
                    </li>
                  )
                })
              }

          </ul>

        </div>

        
        <div>
          <h4>My Account</h4>

          <ul className="myAccount-params param-links">
          
              {
                FootersLinksData.Myaccount.map(({linkname, link}, index)=> {
                  return (
                    <li key={index}>
                      <Link to={link}>{linkname}</Link>
                    </li>
                  )
                })
              }

          </ul>

        </div>


        <div>
        <h4>Help</h4>

        <ul className="Help-params param-links">
        
            {
              FootersLinksData.Help.map(({linkname, link}, index)=> {
                return (
                  <li key={index}>
                    <Link to={link}>{linkname}</Link>
                  </li>
                )
              })
            }

        </ul>

      </div>







      </div>
    </footer>
  )
}

export default Footer