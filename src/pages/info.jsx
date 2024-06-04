import React from 'react'
import AppNavBar from '../components/navbar'
import { FaqSimple } from '../components/faq'
import Terms from '../components/terms'


const links = [
    { label: "Home", href: "/"},
    { label: "Contact", href: "/#Contact" },
    { label: "Write a Review", href: "" },
  ]

const InfoPage = () => {
  return (
    <div>
        <section>
            <AppNavBar links={links}/>
        </section>
        <section style={{ paddingTop: "150px" }}>
            <Terms />
        </section>
        <div id="FAQ" className='sm:w-5/6 mx-auto'>
          <FaqSimple />
        </div>
    </div>
  )
}

export default InfoPage