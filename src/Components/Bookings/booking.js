import React, { Component, useEffect, useState } from 'react';

import './booking.css'
import axios from 'axios';
import card from '../../images/job1.jpg';
import card2 from '../../images/job3.jpg';
import card3 from '../../images/job5.jpg';
import card4 from '../../images/job4.jpg';
import { Link } from 'react-router-dom'


const Booking = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:3001/getServices').then(services =>setServices(services.data)).catch(err => console.log(err))
    }, [])
    return(
        <div className="Booking-Container">
            
            <div className='back'>
                <Link to="/">
                    <i className="arrow left"></i>
                </Link>
            </div>
            
          <h3 className='booking-title'> Bookings </h3>
          <div className='booking-holder'>
                
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

                <div className='cards'>
                    <div className='card-img'>
                        <img src={card2} className='img-sec'></img>
                    </div>
                    <div className='card-info'>
                        <h3>Carpentry</h3>
                        <h4>Accepted</h4>
                        <p className='detail'>Date: 1 June 2023</p>
                        <p className='detail'>Time: 1:00pm</p>
                        <p className='detail'>Address: Manila City</p>
                        <p className='detail'> Customer: Name</p>
                    </div>
                </div>

                <div className='cards'>
                    <div className='card-img'>
                        <img src={card3} className='img-sec'></img>
                    </div>
                    <div className='card-info'>
                        <h3>Electrical</h3>
                        <h4>Declined</h4>
                        <p className='detail'>Date: 27 June 2023</p>
                        <p className='detail'>Time: 5:00pm</p>
                        <p className='detail'>Address: Pasig City</p>
                        <p className='detail'> Customer: Name</p>
                    </div>
                </div>

                <div className='cards'>
                    <div className='card-img'>
                        <img src={card4} className='img-sec'></img>
                    </div>
                    <div className='card-info'>
                        <h3>Aircon Cleaning</h3>
                        <h4>Accepted</h4>
                        <p className='detail'>Date: 27 June 2023</p>
                        <p className='detail'>Time: 5:00pm</p>
                        <p className='detail'>Address: Taguig City</p>
                        <p className='detail'> Customer: Name</p>
                    </div>
                </div>
          </div>
        </div>
    );
}

export default Booking