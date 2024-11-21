import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import logo from '../assets/manidb.png'
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigator =useNavigate();
  const handleSearch=(e)=>{
    e.preventDefault();
    const queryTerm =e.target.search.value;
    e.target.reset();
   return navigator(`/search?q=${queryTerm}`);

  };


  
  return (
    <>
           
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
  <p className="navbar-brand fw-bold text-black bg-warning border  rounded  " >
  MANIUKI Db
</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
  <li className='nav-item'>

    <NavLink className="nav-link px-4 py-2 text-white" to='/'>Home</NavLink>
  </li>
  <li className='nav-item'>
    <NavLink className="nav-link px-3 py-2 text-white" to='/movies/upcoming'>Upcoming Movies</NavLink>
  </li>
  <li className='nav-item'>
    <NavLink className="nav-link px-3 py-2 text-white" to='/movies/top'>Top Rated Movies</NavLink>
  </li>
  <li className='nav-item'>
    <NavLink className="nav-link px-3 py-2 text-white" to='/movies/popular'>Popular</NavLink>
  </li>
</ul>

            <form onSubmit={handleSearch} className="d-flex">
              <input 
              name='search'
                type="search" 
                placeholder="Search" 
                className="form-control form-control-md " 
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
