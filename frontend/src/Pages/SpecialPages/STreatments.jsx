import React from 'react'
import Footer from '../Footer'
import Treatments from '../Treatments'

export default function STreatments() {
  return <>
    <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <h1 class="display-3 text-white mb-3 animated slideInDown">Treatments</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb text-uppercase mb-0">
                    <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                    <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                    <li class="breadcrumb-item text-primary active" aria-current="page">Treatments</li>
                </ol>
            </nav>
        </div>
    </div>
   <Treatments/>
   <Footer/>
  </>
}
