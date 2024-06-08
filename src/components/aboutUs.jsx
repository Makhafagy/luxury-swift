import React from "react"
import styled from "@emotion/styled"
import { motion } from 'framer-motion';
const LeftHalf = styled.div`
  min-height: 410px;
  box-sizing: border-box;
  justify-content: space-between;
`

const Title = styled.div`
  min-height: 260px;
  font-family: sans-serif;
  background: rgba(94, 100, 105, 0.062);
`
const SecondTitle = styled.span`
  font-size: 32px !important;
  font-family: sans-serif;
  font-weight: bold;
`
const LeftText = styled.div`
  background-color: #228be640;
  min-height: 150px;
  padding: 20px;
  color: #000000;
  font-size: 13pt;
  font-family: sans-serif;
`

// const SectionHeading = styled.div`
//   margin-top: 6rem !important;
//   font-size: 35pt;
//   color: black;
//   text-align: center;
//   @media screen and (max-width: 600px) {
//     font-size: 25pt;
//   }
// `
// const SectionDescription = styled.div`
//   font-size: 12pt;
//   font-family: Arial, Helvetica, sans-serif;
//   text-align: center;
//   color: #8a8a8a;
//   margin-bottom: 70px;
//   margin-left: 23px;
//   margin-right: 23px;
// `

const AboutUs = () => {
  return (
    <>
      <div className="md:text-4xl text-center uppercase mb-8 text-3xl">
        Why Choose Us
      </div>
      <div className="text-lg text-center text-gray-500 mb-12 mx-6 md:mx-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </div>
      <motion.div
        initial={{ opacity: 0, y:-10 }}
        whileInView={{ opacity: 1, y:0 }}
        viewport={{ once: true, amount:0.3 }}
        transition={{duration:0.3}}
        className="max-w-screen-lg mx-auto px-6 sm:px-16 lg:px-10">

        <div className="flex flex-wrap">
          <LeftHalf className="w-full md:w-5/12">
            <Title className="flex">
              <div className="text-base/7 p-4">
                ABOUT US <br /> <SecondTitle>#1 in Toronto</SecondTitle>
              </div>
            </Title>

            <LeftText className="flex">
              <div>
                We have a variety of packages that will fit your needs
                perfectly. We pride ourselves on using our professional-grade
                products to deliver an exceptional look to your vehicle.
              </div>
            </LeftText>
          </LeftHalf>

          <div className="w-full md:w-7/12 carpic" />
        </div>

      </motion.div>

    </>
  )
}

export default AboutUs
