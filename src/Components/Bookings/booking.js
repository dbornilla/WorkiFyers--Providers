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
            
            <div className='back'>
            <i className="arrow left"></i>
            </div>
            
          <h3 className='title'> Bookings </h3>
          <div className='booking-holder'>
                box
                <div className='cards'>
                    <div className='card-img'>
                        <img src={card} className='img-sec'></img>
                    </div>
                    <div className='card-info'>
                        <h3>House Cleaning</h3>
                        <h4>Pending</h4>
                        <p className='detail'>Date: 27 June 2023</p>
                        <p className='detail'>Time: 5:00pm</p>
                        <p className='detail'>Address: Manila City</p>
                        <p className='detail'> Customer: Name</p>
                    </div>
                </div>
          </div>
        </div>
    );
}

export default Booking