import * as React from "react"
import Navbar from "../components/navbar"
import HeroCarousel from "../components/hero"
import { FeaturesAsymmetrical } from "../components/features"
import AboutUs from "../components/aboutUs"
import { FaqSimple } from "../components/faq"
import ContactCard from '../components/contactCard'
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
        <section style={{marginTop:"140.64px"}}>
          <HeroCarousel />
        </section>
        <section>
          <FeaturesAsymmetrical />
        </section>
        <section style={{ minHeight: "900px" }}>
          <AboutUs />
        </section>
        <section>
          <FaqSimple />
        </section>
        <section style={{ minHeight: "900px" }}>
          <ContactCard/>
        </section>
      </body>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
