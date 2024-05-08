import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        // text="Choose Your Favourite Destination."
        // buttonText="Travel Plan"
        // url="/"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
