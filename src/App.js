import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter} from "react-router-dom";
import Navbar from '../src/Components/Navbar/Navbar';
import Services from './Components/Services/services';
import Message from './Components/Message/message';
import Booking from './Components/Bookings/booking';
import Offers from './Components/Offers/offer';
import addService from './Components/Offers/addService';

function App(){
  
    
    return (
      <div className="App">
        <Navbar />
        <Message />
        <Routes>
          <Route path='/' element={ < Services />} />
          <Route path='booking' element={ < Booking />} />
          <Route path='offers' element={ < Offers />} />
          <Route path='addService' element={ < Services />} />
        </Routes>
        
        
        
        
      </div>
    );
  
}

export default App;
