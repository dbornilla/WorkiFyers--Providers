import React, { Component, useEffect, useState } from 'react';

import './service.css'
import axios from 'axios';
import card from '../../images/job1.jpg';
import card2 from '../../images/job3.jpg';
import card3 from '../../images/job5.jpg';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:3001/getServices').then(services =>setServices(services.data)).catch(err => console.log(err))
    }, [])
    return(
        <div className="Services-Container">
          <h3 className='title'> Upcoming Tasks </h3>
          <div className='services-holder'>
          
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

            <div className='box'>
              <img src={card2} ></img>
              
              <div className='status'>
                Accepted
              </div>
              <div className='infos'>
                <h3 className='titleDate'>25 June</h3>
                <h4 className='titleName'>Carpentry</h4>
                <p className='details'> Address: Manila City</p>
                <p className='details'> 5:00pm</p>
                <p className='details'> Juan De la Cruz </p>
              </div>
            </div>

            <div className='box'>
              <img src={card3} ></img>
              
              <div className='status'>
                In Progress
              </div>
              <div className='infos'>
                <h3 className='titleDate'>28 June</h3>
                <h4 className='titleName'>Electrical</h4>
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