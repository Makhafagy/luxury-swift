import React, { Component } from "react"
import ReactCompareImage from "react-compare-image"
import styled from '@emotion/styled'


const Icon = styled.a`
  font-size: 17px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff; /* Tailwind's blue-500 */
  border-radius: 9999px; /* Tailwind's rounded-full */
  width: 35px;
  height: 35px;
`

class TopBar extends Component {
  render() {
    const MainLogo = require("../images/daily_logo.jpg").default


  
  return (
    <div className="bg-black">
      <nav className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-4 font-sans text-2xl p-1">
            <img src={MainLogo} width={75}/>
          </div>
          <div className="col-span-8 flex justify-around">
            <div className="text-white flex items-center">
              <Icon className="bi bi-geo-alt-fill mr-2"/>
              <span className="hidden md:flex">Ottawa, Canada</span>
            </div>
            <div className="text-white flex items-center">
              <Icon href="tel:+16134104971" className="bi bi-telephone-fill mr-2"/>
              <span className="hidden md:flex">+1 613-410-4971</span>
            </div>
            <div className="text-white flex items-center">
              <Icon href="mailto:mah.hussaina@gmail.com" className="bi bi-envelope-fill mr-2"/>
              <span className="hidden md:flex">Email Us</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
}

export default TopBar
