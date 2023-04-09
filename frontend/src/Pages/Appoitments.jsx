
import React, { useState } from 'react'
import axios from "axios"

export default function Appoitments() {
    const [Alert, setAlert] = useState(true)
    const [userData, setuserData] = useState({
        name: "",
        email: "",
        mobile: "",
        chooseDoctor: "",
        chooseDateTime: "",
        desc: ""
    })
    const HandleAddappoinment = async (e) => {
        e.preventDefault()
        const { data } = await axios.post(`http://localhost:5000/appoinment/add`, userData)
        setuserData(data)
        console.log(data);
        setAlert(true)
    }
    return <>
    {    !userData ?<div class="alert alert-danger"> Add
    </div>:""
}

        {/* <!-- Appointment Start --> */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-6 wow fadeInUp" userData-wow-delay="0.1s">
                        <p class="d-inline-block border carasole text-light rounded-pill py-1 px-4">Appointment</p>
                        <h1 class="mb-4">Make An Appointment To Visit Our Doctor</h1>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div class="bg-light rounded d-flex align-items-center p-5 mb-4">
                            <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: "55px" }}>
                                <i class="fa fa-phone-alt text-primary"></i>
                            </div>
                            <div class="ms-4">
                                <p class="mb-2">Call Us Now</p>
                                <h5 class="mb-0">+91 9988776655</h5>
                            </div>
                        </div>
                        <div class="bg-light rounded d-flex align-items-center p-5">
                            <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: "55px" }}>
                                <i class="fa fa-envelope-open text-primary"></i>
                            </div>
                            <div class="ms-4">
                                <p class="mb-2">Mail Us Now</p>
                                <h5 class="mb-0">info@example.com</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" userData-wow-delay="0.5s">
                        <div class="bg-light rounded h-100 d-flex align-items-center p-5">
                            <form onSubmit={HandleAddappoinment}  className="was-validated">
                                <div class="row g-3">
                                    <div class="col-12 col-sm-6">
                                        <input type="text" class="form-control border-0"
                                            placeholder="Your Name" style={{ height: "55px" }}
                                            onChange={e => setuserData({ ...userData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="email" class="form-control border-0"
                                            placeholder="Your Email" style={{ height: "55px" }}
                                            onChange={e => setuserData({ ...userData, email: e.target.value })}
                                            required

                                        />
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="number" class="form-control border-0" placeholder="Your Mobile"
                                            style={{ height: "55px" }}
                                            onChange={e => setuserData({ ...userData, mobile: e.target.value })}
                                            required
                                        />
                                    </div>
                                    {/* <div class="col-12 col-sm-6">
                                        <select class="form-select border-0"
                                            onChange={e => setuserData({ ...userData, chooseDoctor: e.target.value })}
                                            style={{ height: "55px" }}
                                            required

                                        >
                                            <option selected>Choose Doctor</option>
                                            <option value="Doctor 1">Doctor 1</option>
                                            <option value="Doctor 2">Doctor 2</option>
                                            <option value="Doctor 3">Doctor 3</option>
                                        </select>
                                    </div> */}
                                    <div class="col-12 col-sm-6">
                                        <div class="date" id="date" userData-target-input="nearest">
                                            <input type="datetime-local"
                                                class="form-control border-0 datetimepicker-input "
                                                placeholder="Choose Date And Time" userData-target="#date"
                                                userData-toggle="datetimepicker" style={{ height: "55px" }}
                                                onChange={e => setuserData({ ...userData, chooseDateTime: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <textarea class="form-control border-0" rows="5" placeholder="Describe your problem"
                                            onChange={e => setuserData({ ...userData, desc: e.target.value })}
                                            required
                                        ></textarea>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn carasole w-100 py-3 text-light"

                                            type="submit">Book Appointment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Appointment End --> */}
 </>
}
