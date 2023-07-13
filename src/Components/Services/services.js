import React, { Component, useEffect, useState } from 'react';

import './service.css'
import axios from 'axios';
import card from '../../images/job1.jpg';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:3001/getServices').then(services =>setServices(services.data)).catch(err => console.log(err))
    }, [])
    return(
        <div className="Services-Container">
          <h3 className='title'> Upcoming Tasks </h3>
          <div className='services-holder'>
            <p>box</p>
            <div className='box'>
              <img src={card} ></img>
              
              <div className='status'>
                Pending
              </div>
              <div className='infos'>
                <h3 className='titleDate'>22 June</h3>
                <h4 className='titleName'>House Cleaning</h4>
                <p className='details'> Address: Manila City</p>
                <p className='details'> 5:00pm</p>
                <p className='details'> Juan De la Cruz </p>
              </div>
            </div>
          </div>  
        </div>
    );
}

export default Services