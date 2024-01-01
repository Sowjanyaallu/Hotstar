import React from 'react'
import './Navbar.css'
import { FiSearch } from "react-icons/fi";
import logo from '../Assests/DisneyHotstar.png'
import { GoHome } from "react-icons/go";
import { RiMovieLine } from "react-icons/ri";
import { BiMovie } from "react-icons/bi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
         <Link to={'/'}>  <img src={logo} alt="hotstar-logo" /></Link> 
        </div>
        <div className="navbar-menu">
            <div className="navbar-icons">
             <Link to={'/search'} style={{textDecoration:'none', color:'white'}}><FiSearch /></Link>   
                <p>Search</p>
            </div>
            <div className="navbar-icons">
             <Link to={'/'} style={{textDecoration:'none', color:'white'}}> <GoHome/></Link>  
                <p>Home</p>
            </div>
            <div className="navbar-icons">
             <Link to={'/tv'} style={{textDecoration:'none', color:'white'}}><RiMovieLine /></Link>   
                <p>TV</p>
            </div>
            <div className="navbar-icons">
             <Link to={'/movies'}  style={{textDecoration:'none', color:'white'}}> <BiMovie /></Link>   
                <p>Movies</p>
            </div>
            <div className="navbar-icons">
            <Link to={'/sports'} style={{textDecoration:'none', color:'white'}}>    <MdOutlineSportsSoccer /></Link>
                <p>Sports</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar