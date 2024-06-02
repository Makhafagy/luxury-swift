import * as React from "react"
import Navbar from "../components/navbar"
import HeroCarousel from "../components/hero"
import { FeaturesAsymmetrical } from "../components/features"
import AboutUs from "../components/aboutUs"
import { FaqSimple } from "../components/faq"
// import ContactCard from "../components/contactCard"
import StatsGroup from "../components/stats"
import { FooterLinks } from "../components/footer"
import Testimonial from "../components/testimonial"
import Packages from "../components/pricing"
import ServiceSection from "../components/services"
import { GetInTouch } from "../components/contactForm"
import styled from '@emotion/styled'

const DreamySection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    padding-top: 100px;
    background: #3c31dd;
    overflow: hidden; 
`;

const Curve = styled.div`
    position: absolute;
    height: 250px;
    width: 100%;
    bottom: 0;
    text-align: center;

    &::before {
        content: '';
        display: block;
        position: absolute;
        border-radius: 100% 50%;
        width: 55%;
        height: 100%;
        transform: translate(85%, 60%);
        background-color: hsl(216, 21%, 16%);
        
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        border-radius: 100% 50%;
        width: 55%;
        height: 100%;
        background-color: #3c31dd;
        transform: translate(-4%, 40%);
         
    }
`;
const IndexPage = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Auto Detailing business" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React, Gatsby" />
        <meta name="author" content="Hussain Alnakhli" />
      </head>

      <body>
        <section>
          <Navbar />
        </section>
        <section style={{ marginTop: "63.99px" }}>
          <HeroCarousel />
        </section>
        <section style={{ marginTop: "100px" }}>
          <FeaturesAsymmetrical />
        </section>
        <section style={{ minHeight: "" }}>
          <AboutUs />
        </section>
        <section style={{ marginTop: "150px" }}>
          <StatsGroup />
        </section>
        <section style={{ marginTop: "100px" }}>
          <Packages />
        </section>
        <section style={{ marginTop: "150px" }}>
          <Testimonial />
        </section>
        <section style={{ marginTop: "150px" }}>
          <ServiceSection />
        </section>

        <section style={{ marginTop: "150px" }}>
          <GetInTouch />
        </section>
        <div style={{ marginTop: "50px" }}>
          <FaqSimple />
        </div>
        <section>
          <FooterLinks />
        </section>
      </body>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
