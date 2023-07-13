import React, { Component, useEffect, useState } from 'react';

import './booking.css'
import axios from 'axios';
import card from '../../images/job1.jpg';


const Booking = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:3001/getServices').then(services =>setServices(services.data)).catch(err => console.log(err))
    }, [])
    return(
        <div className="Booking-Container">
            <i className="arrow left"></i>
          <h3 className='title'> Bookings </h3>
          <div className='booking-holder'>
                box
          </div>
        </div>
    );
}

export default Booking