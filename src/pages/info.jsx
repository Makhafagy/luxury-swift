import React, { useEffect, useState } from "react"
import AppNavBar from "../components/navbar"
import { FaqSimple } from "../components/faq"
import Terms from "../components/terms"
import { FooterLinks } from "../components/footer"

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
  { label: "Home", href: "/" },
  { label: "Contact", href: "/#Contact" },
  // { label: "Write a Review", href: "#" },
]

const InfoPage = () => {
  const [footerLinksData, setFooterLinksData] = useState(data)

  useEffect(() => {
    // Check if the URL contains the #FAQ or #Terms hash
    const currentHash = window.location.hash

    setFooterLinksData(prevData => {
      return prevData.map(group => {
        if (group.title === "About") {
          // Filter out FAQ link if we're on the FAQ section
          if (currentHash === "#FAQ") {
            group.links = group.links.filter(link => link.label !== "FAQ")
          }
          // Filter out Terms & Conditions link if we're on the Terms section
          if (currentHash === "#Terms") {
            group.links = group.links.filter(
              link => link.label !== "Terms & Conditions"
            )
          }
        }
        return group
      })
    })
  }, [])

  return (
    <>
      <div>
        <section>
          <AppNavBar links={links} />
        </section>
        <section id="Terms" style={{ paddingTop: "150px" }}>
          <Terms />
        </section>

        <section id="FAQ" className="sm:w-5/6 mx-auto">
          <FaqSimple />
        </section>
        <section>
          <FooterLinks footerLinks={footerLinksData} />
        </section>
      </div>
    </>
  )
}

export default InfoPage
