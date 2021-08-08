import React from 'react';
import { NavLink } from 'react-router-dom';
//import Web from '../src/images/smit2.jpg';
import './index.css';
import './App.css';

const Common=(props)=>
{
  return (
      <>
  <section id='header' className="d-flex align-items-center">

    <div className='container-fluid '>
        <div className='row'>
            <div className='col-10 mx-auto'>
            <div className='row'>
        
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                    <h1>{props.name} {''}<strong className="brand-name">Smit Donga</strong></h1>
                    <h2 className='my-3'>I am a Full Stack Web-Developer.</h2>
                    <div className='mt-3'>
                        <NavLink to={props.visit} className='btn-get-started'>{props.btname}</NavLink>
                    </div>
                </div>
                <div className='col-lg-4 order-1 order-lg-2'>
                    <img src={props.imgsrc} className='img-fluid animated' alt="home img"/>
                </div>
                </div>
            </div>
            </div>
    </div>

  </section>
  </>
  );
};

export default Common