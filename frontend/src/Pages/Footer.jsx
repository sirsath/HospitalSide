import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return  <>
   <div class="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-light mb-4">Address</h5>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>R-28/30,Near SBI ATM,Sutgirni Chowk,Aurangabad.</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+91 9988776655</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social rounded-circle" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social rounded-circle" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social rounded-circle" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social rounded-circle" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-light mb-4">Treatments</h5>
                    <a class="btn btn-link" href="">Astama Treatment</a>
                    <a class="btn btn-link" href="">Vertigo</a>
                    <a class="btn btn-link" href="">Lower Back Pain</a>
                    <a class="btn btn-link" href="">Frozen shoulder</a>
                    <a class="btn btn-link" href="">Sciatica</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-light mb-4">Quick Links</h5>
                    <Link class="btn btn-link"  to="/SAbout" >About Us</Link>
                    <Link class="btn btn-link"  to="/STreatments" >Treatment</Link>
                    <Link class="btn btn-link"  to="/SContact" >Contact</Link>
                </div>
               
            </div>
        </div>
        
    </div>
  
  </>
}
