import React from "react";

export default function About() {
  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div class="d-flex flex-column">
                <img
                  class="img-fluid rounded w-75 align-self-end"
                  src="./src/img/Dr.mehra.jpeg"
                  style={{ height: "500px" }}
                  alt=""
                />
                <img
                  id="imgMadam"
                  class="img-fluid rounded w-75 bg-white pt-3 pe-3"
                  src="./src/img/Dr.sangita .jpg"
                  alt=""
                  style={{ marginTop: "-25%", height: "500px" }}
                />
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <p class="d-inline-block border rounded-pill py-1 px-4 carasole text-light mb-5">
                About Us
              </p>
              <h1 class="mb-4">About Dr. Lajpatrai Mehra</h1>
              <p>
                Dr. Lajpatrai Mehra was born on August 23, 1932, into a
                well-known Amritsar family as the seventh child of Sri. Ramgopal
                Mehra and Smt. Kesara Devi. He is regarded as a living legend of
                his day for establishing a unique technique (LMNT) for healing
                the people without the use of medication, as well as for his
                altruistic and dedicated contribution to humanity. At the young
                age of 11, he was diagnosed with a severe stomach ache that
                lasted for several months and was not relieved by the greatest
                medical care available at the time.
              </p>

              <button
                id="btnReadMore1"
                class="btn carasole text-light rounded-pill py-2 px-5 mt-3"
                data-bs-toggle="modal"
                data-bs-target="#aboutreadmore_1"
                onclick="return ShowData1();"
              >
                Read More
              </button>

              <p
                id="ReadMoreContaint1_1"
                class="mb-4"
                style={{ display: "none" }}
              >
                At the young age of 11, he was diagnosed with a severe stomach
                ache that lasted for several months and was not relieved by the
                greatest medical care available at the time. He encountered an
                old man by chance who instructed him to lie face down and cured
                him almost instantaneously with a basic native technique
                offsetting the navel' by manipulating his hands and legs in a
                specific manner.
              </p>
              <p
                id="ReadMoreContaint1_2"
                class="mb-4"
                style={{ display: "none" }}
              >
                Helping others came naturally to Lajpatrai. Unlike other
                children of his age, he did not allow the incident to pass by.
                Instead, he constantly meditated upon the miracle wrought in his
                body by the seemingly crude technique and longed to relieve
                others of similar pains.
              </p>
              <p
                id="ReadMoreContaint1_3"
                class="mb-4"
                style={{ display: "none" }}
              >
                The navel is described in ancient Indian scriptures as the
                centre of the whole body. A major cause of digestive problems is
                the change in the position of the navel relative to the rest of
                the stomach.
              </p>
              <p
                id="ReadMoreContaint1_4"
                class="mb-4"
                style={{ display: "none" }}
              >
                Despite the fact that the old man did not provide him with the
                procedure or the operational instructions, the inventive
                Lajpatrai recognized that the process increased the pressure on
                particular spots on his body. His mother suffered from stomach
                problems all the time. With her as a willing participant, he
                created a revolutionary method of using his feet to produce a
                similar effect, relieving her of all pains. After refining the
                method, he began treating others in his community. Soon,
                hundreds of individuals suffering from constipation, dysentery,
                and other stomach issues would congregate in front of his
                father's house, where he would effectively treat them with his
                newly created technique.
              </p>

              <p
                id="ReadMoreContaint1_5"
                class="mb-4"
                style={{ display: "none" }}
              >
                His house was one of the first casualties of the partition
                disturbances. The once rich family was forced to leave all of
                their valuables and arrive as refugees in Mumbai (formerly known
                as Bombay) in 1947.
              </p>
              <p
                id="ReadMoreContaint1_6"
                class="mb-4"
                style={{ display: "none" }}
              >
                The majority of these institutes have opened from many years,
                following the founding of the residential training center, "Dr.
                Lajpatrai Mehra's Neurotherapy Academy," in Suryamal near Wada,
                125 kilometers from Mumbai, in Mokhada Taluk, Thane District.
                There are currently many LMNT facilities throughout India, as
                well as one each in Canada, the United Kingdom, Italy, and
                Australia.
              </p>
              <p
                id="ReadMoreContaint1_7"
                class="mb-4"
                style={{ display: "none" }}
              >
                Students come from all over India to help him realize his
                ambition of establishing at least one LMNT center in every six
                villages. This therapy provides a source of income for almost
                three thousand families.
              </p>
              <button
                id="btnHide1"
                style={{ display: "none" }}
                class="btn btn-primary rounded-pill py-3 px-5 mt-3"
                onclick="return HideData1();"
              >
                Hide
              </button>
              <button
                id="btnHide1"
                style={{ display: "none" }}
                class=" btn fa fa-plus text-primary me-3"
                onclick="return HideData1();"
              >
                <i class="fa fa-minus text-primary me-3"></i> Hide
              </button>

              <h1 class="mb-4 mt-5">About Dr. Sangeeta Yenchewad </h1>
              <p>Dr. Sangeeta Yenchewad is an expert in neurotherapy.</p>
              <p>
                She has received extensive training in managing all types of
                chronic conditions by using a variety of Neurotherapy procedures
                to cure serious illnesses without the use of drugs. She has
                demonstrated amazing results on numerous patients.
              </p>
              <button
                id="btnReadMore2"
                class="btn carasole text-light rounded-pill py-2 px-5 mt-3"
                onclick="return ShowData2();"
                data-bs-toggle="modal"
                data-bs-target="#aboutreadmore_2"
              >
                Read More
              </button>

              <p
                id="ReadMoreContaint2_1"
                class="mb-4"
                style={{ display: "none" }}
              >
                She is a social activist who has been providing healthcare
                services to the public for more than 7 years.
              </p>
              <p
                id="ReadMoreContaint2_2"
                class="mb-4"
                style={{ display: "none" }}
              >
                Many people in Maharashtra have benefited from her expertise in
                neurotherapy, a technique that allows for disease treatment
                without the use of medications. She has extensive training and
                expertise in neurotherapy.
              </p>
              <p
                id="ReadMoreContaint2_3"
                class="mb-4"
                style={{ display: "none" }}
              >
                Father of Neurotherapy Dr. Lajpatrai Mehra, for her commitment,
                for making Neurotherapy widely recognised, and for helping to
                disseminate this incredible revolution in the area. She will
                host many conferences, training sessions, and camps on
                neurotherapy at professional, academic, and corporate levels.
              </p>

              <button
                id="btnHide2"
                style={{ display: "none" }}
                class="btn btn-primary rounded-pill py-3 px-5 mt-3"
                onclick="return HideData2();"
              >
                Hide
              </button>
              <button
                id="btnHide2"
                style={{ display: "none" }}
                class=" btn fa fa-plus text-primary me-3"
                onclick="return HideData2();"
              >
                <i class="fa fa-minus text-primary me-3"></i> Hide
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal____1 --> */}
      <div
        class="modal fade"
        id="aboutreadmore_1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="card">
                <div class="card-header">
                  <h4 class="text-center">Dr.Lajpatrai Mehra</h4>
                </div>
                <div class="card-body">
                  He encountered an old man by chance who instructed him to lie
                  face down and cured him almost instantaneously with a basic
                  native technique offsetting the navel' by manipulating his
                  hands and legs in a specific manner. Helping others came
                  naturally to Lajpatrai. Unlike other children of his age, he
                  did not allow the incident to pass by. Instead, he constantly
                  meditated upon the miracle wrought in his body by the
                  seemingly crude technique and longed to relieve others of
                  similar pains. The navel is described in ancient Indian
                  scriptures as the centre of the whole body. A major cause of
                  digestive problems is the change in the position of the navel
                  relative to the rest of the stomach. Despite the fact that the
                  old man did not provide him with the procedure or the
                  operational instructions, the inventive Lajpatrai recognized
                  that the process increased the pressure on particular spots on
                  his body. His mother suffered from stomach problems all the
                  time. With her as a willing participant, he created a
                  revolutionary method of using his feet to produce a similar
                  effect, relieving her of all pains. After refining the method,
                  he began treating others in his community. Soon, hundreds of
                  individuals suffering from constipation, dysentery, and other
                  stomach issues would congregate in front of his father's
                  house, where he would effectively treat them with his newly
                  created technique. His house was one of the first casualties
                  of the partition disturbances. The once rich family was forced
                  to leave all of their valuables and arrive as refugees in
                  Mumbai (formerly known as Bombay) in 1947. The majority of
                  these institutes have opened from many years, following the
                  founding of the residential training center, "Dr. Lajpatrai
                  Mehra's Neurotherapy Academy," in Suryamal near Wada, 125
                  kilometers from Mumbai, in Mokhada Taluk, Thane District.
                  There are currently many LMNT facilities throughout India, as
                  well as one each in Canada, the United Kingdom, Italy, and
                  Australia. Students come from all over India to help him
                  realize his ambition of establishing at least one LMNT center
                  in every six villages. This therapy provides a source of
                  income for almost three thousand families.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal____2 --> */}
      <div
        class="modal fade"
        id="aboutreadmore_2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="card">
                <div class="card-header">
                  <h3 class="text-center">Dr.Sangeeta Yenchewad </h3>
                </div>
                <div class="card-body">
                  She is a social activist who has been providing healthcare
                  services to the public for more than 7 years. Her knowledge of
                  neurotherapy, a method that allows for disease treatment
                  without the need of pharmaceuticals, has helped a lot of
                  people in Maharashtra. She has a lot of experience and
                  training in neurotherapy. Inspired by the Father of
                  Neurotherapy Dr. Lajpatrai Mehra, Dr. Sangeeta Yenchewad is
                  known for her commitment, for making Neurotherapy widely
                  recognised, and for helping to disseminate this incredible
                  revolution in the area. She hosts many conferences, training
                  sessions, and camps on neurotherapy at professional, academic,
                  and corporate levels.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
