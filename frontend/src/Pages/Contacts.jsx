
import axios from 'axios'
import React, { useState } from 'react'

export default function Contacts() {
    const [conatctData, setContactData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const HandleAddContacts = async (e) => {
        e.preventDefault()
        const { data } = await axios.post(`http://localhost:5000/contacts/addcontactsData`, conatctData)
        setContactData(data)
        console.log(data);

    }
    return <>
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-4">
                        <div class="h-100 bg-light rounded d-flex align-items-center p-5">
                            <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: "55px", height: "55px" }}>
                                <i class="fa fa-map-marker-alt text-primary"></i>
                            </div>
                            <div class="ms-4">
                                <p class="mb-2">Address</p>
                                <h5 class="mb-0">R-28/30, Near SBI ATM, Sutgirni Chowk, Aurangabad.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="h-100 bg-light rounded d-flex align-items-center p-5">
                            <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: "55px", height: "55px" }}>
                                <i class="fa fa-phone-alt text-primary"></i>
                            </div>
                            <div class="ms-4">
                                <p class="mb-2">Call Us Now</p>
                                <h5 class="mb-0">+91 9988776655</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="h-100 bg-light rounded d-flex align-items-center p-5">
                            <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: "55px", height: "55px" }}>
                                <i class="fa fa-envelope-open text-primary"></i>
                            </div>
                            <div class="ms-4">
                                <p class="mb-2">Mail Us Now</p>
                                <h5 class="mb-0">info@example.com</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="bg-light rounded p-5">
                            <p class="d-inline-block border rounded-pill py-1 px-4">Contact Us</p>
                            <h1 class="mb-4">Have Any Query? Please Contact Us!</h1>
                            <p class="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <form onSubmit={HandleAddContacts}>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control"
                                                onChange={e => setContactData({ ...conatctData, name: e.target.value })}
                                                id="name" placeholder="Your Name" />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control"
                                                onChange={e => setContactData({ ...conatctData, email: e.target.value })}
                                                id="email" placeholder="Your Email" />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control"
                                                onChange={e => setContactData({ ...conatctData, subject: e.target.value })}
                                                id="subject" placeholder="Subject" />
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a message here"
                                                onChange={e => setContactData({ ...conatctData, message: e.target.value })}
                                                id="message" style={{ height: "100px" }}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn carasole text-light w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div class="h-100" style={{ minHeight: "400px" }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480212.8334786927!2d74.799144765625!3d19.896457200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3d08498b683%3A0xd4992bdf65240f8c!2sDR.%20LAJPATRAI%20MEHRA&#39;S%20NEUROTHERAPY%20HEALTH%20CARE%20CENTER!5e0!3m2!1sen!2sin!4v1677051033628!5m2!1sen!2sin" width="600" height="700" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}
