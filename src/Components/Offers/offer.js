import React, { Component, useEffect, useState } from 'react';

import './offer.css'
import axios from 'axios';
import card from '../../images/job1.jpg';
import card2 from '../../images/job3.jpg';
import card3 from '../../images/job5.jpg';
import { Link } from 'react-router-dom'
const Offers = () =>{
    return(
        <div className='Offers-Container'>
            <div className='back'>
                <Link to="/">
                    <i className="arrow left"></i>
                </Link>
                
            </div>
            <h3 className='title'>My services</h3>

            <div className='head-offers'>
                <input placeholder='Search'></input>
                <Link to="/addService">
                <button> Add Service </button>
                </Link>
            </div>
            <div className='offer-holder'>
                
                <div className='offer-cards'>
                    <div className='card-img'>
                        <img src={card} width="100"></img>
                    </div>
                    <div className='card-infos'>
                        <h4 className='title-detail'>House Cleaning</h4>
                        <p className='rating'> 5.0 rating</p>
                        <p className='price'> 0.0 php</p>
                        <p className='provider'> Provider's name</p>
                    </div>
                </div>

                <div className='offer-cards'>
                    <div className='card-img'>
                        <img src={card2} width="100"></img>
                    </div>
                    <div className='card-infos'>
                        <h4 className='title-detail'>Carpentry</h4>
                        <p className='rating'> 5.0 rating</p>
                        <p className='price'> 0.0 php</p>
                        <p className='provider'> Provider's name</p>
                    </div>
                </div>

                <div className='offer-cards'>
                    <div className='card-img'>
                        <img src={card3} width="100"></img>
                    </div>
                    <div className='card-infos'>
                        <h4 className='title-detail'>Electrical</h4>
                        <p className='rating'> 5.0 rating</p>
                        <p className='price'> 0.0 php</p>
                        <p className='provider'> Provider's name</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Offers