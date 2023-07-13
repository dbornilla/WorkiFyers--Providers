import React, { Component, useEffect, useState } from 'react';

import './offer.css'
import axios from 'axios';
import card from '../../images/job1.jpg';
import card2 from '../../images/job3.jpg';
import card3 from '../../images/job5.jpg';
import { Link } from 'react-router-dom'

const addService = () => {
    return(
        <div className='Add-Container'>
            <h3> Add Service </h3>
        </div>
    );
}

export default addService