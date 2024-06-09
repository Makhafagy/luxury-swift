import * as React from "react"
import Navbar from "../components/navbar"
import HeroCarousel from "../components/heroAnt"
import { FeaturesAsymmetrical } from "../components/features"
import AboutUs from "../components/aboutUs"
import StatsGroup from "../components/stats"
import { FooterLinks } from "../components/footer"
import Testimonial from "../components/testimonial"
import Packages from "../components/pricing"
import ServiceSection from "../components/services"
import Contact from "../components/contact"
import Gallery from "../components/gallery"
import ScrollArrow from '../components/scrollUpBtn'
const data = [
  {
    title: "About",
    links: [
      { label: "Testimonial", href: "#Testimonial" },
      { label: "Stats", href: "#Stats" },
      { label: "FAQ", href: "/info/#FAQ" },
      { label: "Terms & Conditions", href: "/info" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Packages", href: "#Packages" },
      { label: "Add-ons", href: "#" },
      { label: "Headlight Restoration", href: "#Services" },
      { label: "Ceramic Coating", href: "#Services" },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "Write a review", href: "#" },
      { label: "Follow on instagram", href: "#" },
      { label: "Our Facebook page", href: "#" },
      { label: "Check our Tiktok", href: "#" },
    ],
  },
]
const links = [
  { label: "About", href: "#About"},
  { label: "Pricing", href: "#Packages" },
  { label: "Testimonial", href: "#Testimonial" },
  { label: "Services", href: "#Services" },
  { label: "Gallery", href: "#Gallery" },
  { label: "Contact", href: "#Contact" },
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
        <section style={{ marginTop: "80px", overflowX:"hidden" }}>
          <HeroCarousel />
        </section>
        <section className="w-11/12 mx-auto overflow-x-hidden">
          <FeaturesAsymmetrical />
        </section>
        <section id="About" style={{ paddingTop: "80px", overflowX:"hidden" }}>
          <AboutUs />
        </section>
        <section id="Stats" style={{ paddingTop: "150px", overflowX:"hidden" }}>
          <StatsGroup />
        </section>
        <section id="Packages" style={{ paddingTop: "100px", overflowX:"hidden" }}>
          <Packages />
        </section>
        <section id="Testimonial" style={{ paddingTop: "80px", marginTop:"50px", overflowX:"hidden" }}>
          <Testimonial />
        </section>
        <section id="Services" style={{ paddingTop: "150px", paddingBottom:"60px", overflowX:"hidden"}}>
          <ServiceSection />
        </section>
        <section id="Gallery" style={{ paddingTop: "40px", overflowX:"hidden"}}>
          <Gallery/>
        </section>
        <section id="Contact" style={{ paddingTop: "100px", paddingBottom: "100px", overflowX:"hidden"  }}>
          <Contact />
        </section>
        <section>
          <FooterLinks footerLinks={data} />
        </section>
        <section>
        <ScrollArrow/>
        </section>
      </body>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
