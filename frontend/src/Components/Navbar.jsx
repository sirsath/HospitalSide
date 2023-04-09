import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
    {/* <!-- Navbar Start --> */}
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-3 wow fadeIn" data-wow-delay="0.1s">
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <img src="./src/img/header_logo.jpeg"  height="90vh" width="110vw"   alt=""/>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0 active">
                <Link  to="/" class="nav-item nav-link ">Home</Link>
                <Link  to="/SAbout" class="nav-item nav-link">About</Link>
                <Link  to="/STreatments" class="nav-item nav-link">Treatments</Link>
                <Link  to="/SContact" class="nav-item nav-link">Contact</Link>
            </div>
            <Link to="/SAppointment" class="btn carasole text-light rounded-0 py-4 px-lg-5 d-none d-lg-block">Appointment<i class="fa fa-arrow-right ms-3"></i></Link>
        </div>
    </nav>
    {/* <!-- Navbar End --> */}


   

  
  </>
}
