import React from 'react'

export default function Treatments() {
  return <>
    
   {/* <!-- Service Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <p class="d-inline-block border rounded-pill py-1 px-4 carasole text-light">Treatment</p>
                <h1>Health Care Solutions</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item bg-light rounded h-100 p-5">
                        <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                            style={{width: "65px" , height: "65px"}}>
                            <i class="fa fa-heartbeat text-primary fs-4"></i>
                        </div>
                        <h4 class="mb-3"> Asthma Treatment</h4>
                        <p class="mb-4">Asthma is a chronic lung disease that can cause breathing problems throughout
                            someone's lifetime</p>
                        <button class="btn" data-bs-toggle="modal" data-bs-target="#modal1"><i
                                class="fa fa-plus text-primary me-3"></i>Read More</button>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item bg-light rounded h-100 p-5">
                        <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                            style={{width: "65px" , height: "65px"}}>
                            <i class="fa fa-x-ray text-primary fs-4"></i>
                        </div>
                        <h4 class="mb-3">Vertigo</h4>
                        <p class="mb-4">There are many types of dizziness, one of them is vertigo</p>
                        <button class="btn" data-bs-toggle="modal" data-bs-target="#modal2"><i
                                class="fa fa-plus text-primary me-3"></i>Read More</button>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item bg-light rounded h-100 p-5">
                        <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                            style={{width: "65px" , height: "65px"}}>
                            <i class="fa fa-brain text-primary fs-4"></i>
                        </div>
                        <h4 class="mb-3"> Lower Back Pain</h4>
                        <p class="mb-4">So low back pain is quite normal in fact 80% of us will experience low back pain
                            at some point of our
                            lives, most of us will also go on to experience some type of lumber disc, herniation.</p>
                        <button class="btn" data-bs-toggle="modal" data-bs-target="#modal3"><i
                                class="fa fa-plus text-primary me-3"></i>Read More</button>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item bg-light rounded h-100 p-5">
                        <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                            style={{width: "65px" , height: "65px"}}>
                            <i class="fa fa-wheelchair text-primary fs-4"></i>
                        </div>
                        <h4 class="mb-3">Frozen Shoulder</h4>
                        <p class="mb-4">Frozen shoulder, also known as adhesive capabilities, is a common condition
                            characterized by pain and
                            limited motions of the shoulder joint</p>
                        <button class="btn" data-bs-toggle="modal" data-bs-target="#modal4"><i
                                class="fa fa-plus text-primary me-3"></i>Read More</button>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item bg-light rounded h-100 p-5">
                        <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                            style={{width: "65px" , height: "65px"}}>
                            <i class="fa fa-tooth text-primary fs-4"></i>
                        </div>
                        <h4 class="mb-3">Sciatica Pain</h4>
                        <p class="mb-4">Sciatica is the name given to the main disease caused by irritation of the
                            sciatic nerve. Anything that
                            irritates this nerve can cause pain, ranging from mild to serve</p>
                        <button class="btn" data-bs-toggle="modal" data-bs-target="#modal5"><i
                                class="fa fa-plus text-primary me-3"></i>Read More</button>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item bg-light rounded h-100 p-5">
                        <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                            style={{width: "65px" , height: "65px"}}>
                            <i class="fa fa-vials text-primary fs-4"></i>
                        </div>
                        <h4 class="mb-3"> Cervical Spondylosis</h4>
                        <p class="mb-4">The first main symptom of cervical spondylosis is pain in the neck portion of
                            the spine. It occurs due to
                            compression of the spinal cord and nerves from disc herniation bone spurs</p>
                        <button class="btn" data-bs-toggle="modal" data-bs-target="#modal6"><i
                                class="fa fa-plus text-primary me-3"></i>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Service End --> */}

    {/* <!-- Treatment Read more Start --> */}


    {/* <!-- Modal 1--> */}
    <div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"> Asthma Treatment</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>
                        When you have asthma there is always a little swelling or inflammation inside the airways with
                        or
                        without symptoms. Your lungs react to things that may not bother other people these are known as
                        triggers. Asthma can cause changes within the airways all of which narrow the opening making it
                        difficult to breathe. Through Neurotherapy, you can cure your asthma. It is a very effective
                        treatment.
                        Neurotherapy cures asthma without using any medicine.
                    </p>
                </div>

            </div>
        </div>
    </div>
    {/* <!-- Modal 2--> */}
    <div class="modal fade" id="modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"> Vertigo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>
                        Vertigo is an abnormal sense or perception of
                        motion for maybe you feel that you are moving, or you see the environment moving. When you
                        notice it
                        isn't. Vertigo can happen for a lot of different reasons. It is a symptom, not a diagnosis. If
                        you are facing
                        problems so you can take Neurotherapy treatments for it. It reduces the symptoms of vertigo
                        without
                        using any medicines. Stop suffering from vertigo. Visit the Neuropathy Health Care Center now.
                    </p>
                </div>

            </div>
        </div>
    </div>
    {/* <!-- Modal 3--> */}
    <div class="modal fade" id="modal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"> Vertigo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>
                        We consider these
                        things to be normal and like wrinkles on the inside as we age, we get wrinkles on our exterior.
                        We also
                        get wrinkles on the inside which are completely normal throughout life. Neurotherapy health care
                        center gives you the best treatment for all problems of pain. If you have lower back problems,
                        take
                        treatment in Neurotherapy Health Care Center as soon as possible.
                    </p>
                </div>

            </div>
        </div>
    </div>
    {/* <!-- Modal 4--> */}
    <div class="modal fade" id="modal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"> Vertigo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>
                        Symptoms usually begin gradually, worsen with time and then
                        resolve on their own, typically within a couple of years. The shoulder joint is enclosed in a
                        layer of
                        connective tissue, called the shoulder capsule. In a frozen shoulder, this capsule is inflamed,
                        thick, and
                        becomes tight. This makes shoulder movements difficult and painful. Neurotherapy treatments
                        allow
                        the frozen shoulder to recover within the period of 6 months to 18 months (about 1 and a half
                        years)
                        compared to other treatments which take 3 years to recover.
                    </p>
                </div>

            </div>
        </div>
    </div>
    {/* <!-- Modal 5--> */}
    <div class="modal fade" id="modal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"> Vertigo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>
                        Sciatica is usually caused by a compressed
                        nerve in the lower spine. Age related changes in the spine such as herniated disks and bone
                        spurs are
                        the most common causes of sciatic. By increasing the stress on your spine, excess body weight
                        can
                        contribute to the spinal changes that trigger sciatica. If you want relief from sciatica so you
                        should come
                        to the Neurotherapy Health Care Center. It gives you treatment at a very affordable price.
                    </p>
                </div>

            </div>
        </div>
    </div>
    {/* <!-- Modal 6--> */}
    <div class="modal fade" id="modal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"> Vertigo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>
                        It occurs due to
                        compression of the spinal cord and nerves from disc herniation bone spurs. In most cases pain of
                        cervical spondylosis increases with movement. The reason for this phenomenon is the compression
                        of
                        nerve roots during movements of the cervical vertebrae. Neurotherapy Health Care Center has a
                        cure
                        for every treatment. They have experienced doctors treating any pain. Neurotherapy is the best
                        way to
                        treat cervical spondylosis.

                    </p>
                </div>

            </div>
        </div>
    </div>
  
  </>
}
