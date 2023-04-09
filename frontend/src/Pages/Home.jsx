import React from "react";
import About from "./About";
import Appoitments from "./Appoitments";
import Contacts from "./Contacts";
import Footer from "./Footer";
import HeaderSection from "./HeaderSection";
import Testimonial from "./Testimonial";
import Treatments from "./Treatments";

export default function Home() {
  return (
    <>
    
     {/* <!-- Header Start --> */}
     <HeaderSection/>
     {/* <!-- Header End --> */}
      <About />
      <Treatments />
      <Appoitments />
      <Testimonial />
      <Contacts />
      <Footer />
    </>
  );
}
