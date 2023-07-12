import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter} from "react-router-dom";
import Navbar from '../src/Components/Navbar/Navbar';
import Axios from 'axios'
import axios from 'axios';


function App(){
  
    const [services, setServices] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:3001/getServices').then(services =>setServices(services.data)).catch(err => console.log(err))
    }, [])
    return (
      <div className="App">
        <Navbar />
        <p>hi</p>
        <table className='table'>
        <thread>
          <tr>
            <th>
              Services
            </th>
            <th>
              Date
            </th>
            <th>
              time
            </th>
            <th>
              address
            </th>
            <th>
              status
            </th>

          </tr>
        </thread>
        <tbody>
          {
            services.map(services =>{
              return <tr>
                <td>services.service</td>
                <td>services.date</td>
                <td>services.time</td>
                <td>services.address</td>
                <td>services.status</td>
              </tr>
            })
          }
        </tbody>
        </table>
        
      </div>
    );
  
}

export default App;
