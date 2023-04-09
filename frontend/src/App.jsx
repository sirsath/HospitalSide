import React from "react";
import Navbar from "./Components/Navbar";
import "./css/style.css";
import About from "./Pages/About";
import Appoitments from "./Pages/Appoitments";
import Contacts from "./Pages/Contacts";
import Footer from "./Pages/Footer";
import Testimonial from "./Pages/Testimonial";
import Treatments from "./Pages/Treatments";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SAbout from "./Pages/SpecialPages/SAbout";
import STreatments from "./Pages/SpecialPages/STreatments";
import SContact from "./Pages/SpecialPages/SContact";
import SAppointment from "./Pages/SpecialPages/SAppointment";
import ClientAppoinmtnts from "./Admin/ClientAppoinmtnts";
import HeaderSection from "./Pages/HeaderSection";

export default function App() {
  (function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery)
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HeaderSection" element={<HeaderSection />} />
          <Route path="/About" element={<About />} />
          <Route path="/Treatments" element={<Treatments />} />
          <Route path="/Appoitments" element={<Appoitments />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Footer" element={<Footer />} />

          {/* Special pages */}
          <Route path="/SAbout" element={<SAbout />} />
          <Route path="/STreatments" element={<STreatments />} />
          <Route path="/SContact" element={<SContact />} />
          <Route path="/SAppointment" element={<SAppointment />} />

          {/* Special pages */}

          {/* Admin page */}
           
          <Route path="/ClientAppoinmtnts" element={<ClientAppoinmtnts />} />
          {/* Admin page */}
        </Routes>
      </BrowserRouter>
      
    </>
    
  );
  
}
