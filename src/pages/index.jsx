import * as React from "react"
import Navbar from "../components/navbar"
import HeroCarousel from "../components/hero"
import { FeaturesAsymmetrical } from "../components/features"
import AboutUs from "../components/aboutUs"
import StatsGroup from "../components/stats"
import { FooterLinks } from "../components/footer"
import Testimonial from "../components/testimonial"
import Packages from "../components/pricing"
import ServiceSection from "../components/services"
import { GetInTouch } from "../components/contactForm"
import Gallery from "../components/gallery"

const links = [
  { label: "About", href: "#About"},
  { label: "Packages", href: "#Packages" },
  { label: "Services", href: "#Service" },
  { label: "Contact", href: "#Contact" },
  { label: "Gallery", href: "#Gallery" },
]


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
          <Navbar links={links}/>
        </section>
        <section style={{ marginTop: "63.99px" }}>
          <HeroCarousel />
        </section>
        <section style={{ marginTop: "100px" }}>
          <FeaturesAsymmetrical />
        </section>
        <section id="About" style={{ paddingTop: "10px" }}>
          <AboutUs />
        </section>
        <section style={{ marginTop: "150px" }}>
          <StatsGroup />
        </section>
        <section id="Packages" style={{ paddingTop: "100px" }}>
          <Packages />
        </section>
        <section style={{ marginTop: "150px" }}>
          <Testimonial />
        </section>
        <section id="Service" style={{ paddingTop: "150px" }}>
          <ServiceSection />
        </section>
        <section id="Gallery">
          <Gallery/>
        </section>
        <section style={{ marginTop: "150px", marginBottom: "50px"  }}>
          <GetInTouch />
        </section>
        <section>
          <FooterLinks />
        </section>
      </body>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
