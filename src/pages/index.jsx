import * as React from "react"
import Navbar from "../components/navbar"
import HeroCarousel from "../components/heroAnt"
import { FeaturesAsymmetrical } from "../components/features"
import { FooterLinks } from "../components/footer"
import Packages from "../components/pricing"
import Contact from "../components/contact"
import Gallery from "../components/gallery"
import ScrollArrow from "../components/scrollUpBtn"
const data = [
  {
    title: "About",
    links: [
      { label: "FAQ", href: "/info/#FAQ" },
      { label: "Terms & Conditions", href: "/info/#Terms" },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        label: "Follow on instagram",
        href: "https://www.instagram.com/luxuryswift_autodetailing/",
      },
      {
        label: "Check our Tiktok",
        href: "https://www.tiktok.com/@luxuryswift_detailing",
      },
    ],
  },
]
const links = [
  { label: "Packages", href: "#Packages" },
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
        <meta name="author" content="Luxury Swift LLC" />
      </head>

      <body>
        <section>
          <Navbar links={links} />
        </section>
        <section style={{ marginTop: "80px", overflowX: "hidden" }}>
          <HeroCarousel />
        </section>
        <section className="w-11/12 mx-auto overflow-x-hidden">
          <FeaturesAsymmetrical />
        </section>
        <section
          id="Packages"
          style={{ paddingTop: "100px", overflowX: "hidden" }}
        >
          <Packages />
        </section>
        <section
          id="Gallery"
          style={{
            paddingTop: "40px",
            paddingBottom: "60px",
            overflowX: "hidden",
          }}
        >
          <Gallery />
        </section>
        <section
          id="Contact"
          style={{
            paddingTop: "100px",
            paddingBottom: "100px",
            overflowX: "hidden",
          }}
        >
          <Contact />
        </section>
        <section>
          <FooterLinks footerLinks={data} />
        </section>
        <section>
          <ScrollArrow />
        </section>
      </body>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
