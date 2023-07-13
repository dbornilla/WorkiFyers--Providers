import React, {useState} from 'react'
import './navbar.css'
import {GrUserWorker} from 'react-icons/gr'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import icon from '../../images/bean.jpg'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'




const Navbar = () => {

    const [active, setActive] = useState('navBar')

    // Pang toggle ng navbar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    // Pang close ng navbar
    const removeNavbar = () => {
        setActive('navBar')
    }

    // For toggle of profile menu

    const [show,setShow]=useState(false)

    

    return (
        <section className='navBarSection'>
            <header className="header flex">
                
                <div className="logoDiv">
                    <Link to="/" className="logo flex" reloadDocument>
                    <img src={Logo} className='icon' style={{ width: '3rem', height: 'auto' }}/><h1 className='brand'>Workifyers</h1>
                    </Link>
                </div>

                <div className={active}>
                    <ul className="navLists flex">

                        <li className="navItem">
                            <Link to="/">
                                <a href="#" className="navLink">Home</a>
                            </Link>
                        </li>

                        <li className="navItem">
                            <Link to="/booking">
                                <a href="#about" className="navLink">Bookings</a>
                            </Link>
                        </li>

                        <li className="navItem">
                            <Link to="/offers">
                                <a href="#services" className="navLink">My services</a>
                            </Link>
                        </li>

                        

                        

                    
                        <img src={icon} className='profile-icon' onClick={()=>setShow(!show)}></img>
                        {
                            show? <div className='sub-wrap open-menu' id='subMenu'>
                                    <div className='sub-menu'>
                                        <div className='profile-info'>
                                            <h3> Mr. Bean </h3>
                                        </div>
                                        <hr></hr>
                                        
                                        <Link to="/" className='sub-link' reloadDocument>
                                            <p>Services</p>
                                        </Link>
                                        <Link to="/booking" className='sub-link' reloadDocument>
                                            <p>Bookings</p>
                                        </Link>
                                        <Link to="/offers" className='sub-link' reloadDocument>
                                            <p>My Services</p>
                                        </Link>
                                    </div>
                                </div>: null
                        }
                        
                        

                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </header>
        </section>
    )
}

export default Navbar