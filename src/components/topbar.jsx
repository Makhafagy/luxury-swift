import React, { Component } from "react"
import styled from "@emotion/styled"

const Icon = styled.a`
  font-size: 17px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9e9e9; /* Tailwind's blue-500 */
  border-radius: 9999px; /* Tailwind's rounded-full */
  width: 35px;
  height: 35px;
`

class TopBar extends Component {
  render() {
    const MainLogo = require("../images/daily_logo.jpg").default

    return (
      <div className="bg-black fixed z-50 w-full">
        <nav className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4 font-sans text-2xl p-1 ps-7">
              <img src={MainLogo} width={70} height={70} alt="logo"/>
            </div>
            <div className="col-span-8 flex justify-around">
              <div className="text-white font-light flex items-center">
                <Icon className="bi bi-geo-alt-fill mr-2" />
                <span className="hidden md:flex font-sans">Ottawa, Canada</span>
                
              </div>
              <div className="text-white font-light flex items-center">
                <Icon
                  href="tel:+16134104971"
                  className="bi bi-telephone-fill mr-2"
                />
                <span className="hidden md:flex font-sans">+1 613-410-4971</span>
              </div>
              <div className="text-white font-light flex items-center">
                <Icon
                  href="mailto:mah.hussaina@gmail.com"
                  className="bi bi-envelope-fill mr-2"
                />
                <span className="hidden md:flex font-sans">Email Us</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default TopBar
