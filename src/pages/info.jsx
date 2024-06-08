import React from 'react'
import AppNavBar from '../components/navbar'
import { FaqSimple } from '../components/faq'
import Terms from '../components/terms'
import { FooterLinks } from '../components/footer'

const data = [
  {
    title: "About",
    links: [
      { label: "Testimonial", href: "/#Testimonial" },
      { label: "Stats", href: "/#Stats" },
      { label: "FAQ", href: "#FAQ" },
      { label: "Terms & Conditions", href: "#Terms" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Packages", href: "/#Packages" },
      { label: "Add-ons", href: "#" },
      { label: "Headlight Restoration", href: "/#Services" },
      { label: "Ceramic Coating", href: "/#Services" },
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
  { label: "Home", href: "/" },
  { label: "Contact", href: "/#Contact" },
  { label: "Write a Review", href: "" },
]

const InfoPage = () => {
  return (
    <>
      <div>
        <section>
          <AppNavBar links={links} />
        </section>
        <section id='Terms' style={{ paddingTop: "150px" }}>
          <Terms />
        </section>

        <section id="FAQ" className='sm:w-5/6 mx-auto'>
          <FaqSimple />
        </section>
        <section>
          <FooterLinks footerLinks={data}/>
        </section>
      </div>
    </>
  )
}

export default InfoPage