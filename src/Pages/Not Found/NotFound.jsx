import React from 'react';
import './style.css';
import NotFoundImg from '../../assets/page-404.png';

import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='notFound'>
            <div className="container-fluid">
                <div className='box'>
                    <img src={NotFoundImg} />
                    <br /><br />
                    <h1>Page Not Found</h1>
                    <p>The link you clicked may be broken or the page may have been removed.
                        visit the Homepage or Contact us about the problem</p>
                    <br />


                    <div className='d-flex'>
                        <button className='btn checkout-btn btn-border'><Link to={'/'}>Back to Home Page</Link></button>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default NotFound;