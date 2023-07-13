import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter} from "react-router-dom";
import Navbar from '../src/Components/Navbar/Navbar';
import Services from './Components/Services/services';
import Message from './Components/Message/message';



function App(){
  
    
    return (
      <div className="App">
        <Navbar />
        <Services />
        <Message />
        
        
      </div>
    );
  
}

export default App;
