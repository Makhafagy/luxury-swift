import React from "react"
import { Button } from "@mui/material"
import { TawkContext } from "../providers"
import styled from "@emotion/styled"

const BookButtonStyle = styled(Button)`
  color: #000000;
  margin-left: 16px;
  background-color: #e9e8e8;
  white-space: nowrap;
  width: 75%;
  transition: 0.2s;
  &:hover {
    background: #bbbbbb;
  }
`


const Packages = () => {
  const { tawkMessenger } = React.useContext(TawkContext)
  return (
    <>
      <div className="text-center text-lg capitalize mb-12 md:mb-5 text-gray-600">
        Pricing
      </div>
      <div className="text-5xl text-center uppercase mb-8 md:text-3xl">
        our packages
      </div>
      <div className="text-lg text-center text-gray-500 mb-12 mx-6 md:mx-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </div>

      <div className="sm:container mx-auto 2xl:px-32">
        <div className="flex flex-wrap">
          <div className="w-6/7 sm:w-4/5 md:w-2/3 lg:w-1/3 mx-auto px-1 mb-6">
            <div className="relative p-10 rounded-lg border border-slate-400 shadow-md bg-white">
              <div className="text-xl font-medium py-2 flex items-center">
                <i className="mr-2 bi bi-circle-half " />
                Interior Detail
              </div>
              <div className="text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </div>
              <div className="text-4xl mb-4">
                $125 <span className="text-base text-gray-500">/ Starting</span>
              </div>
              <ItemArray text={["Full Interior & Trunk Vacuum"]} />
              <ItemArray text={["Full Wipe Down & Detail Brush Treatment"]} />
              <ItemArray text={["Advanced Steam Clean"]} />
              <ItemArray text={["Full Seat and Carpet Shampoo"]} />
              <ItemArray text={["Windows clean"]} />
              <ItemArray text={["Fabric Mat Shampoo"]} />
              <ItemArray text={["Rubber Mats Clean"]} />
              <ItemArray text={["Carpet Salt Stain Removal"]} />
              <ItemArray text={["Full Interior Protectant"]} />
              <ItemArray text={["Air Freshener"]} />
              <ItemArrayX text={["5 Stage Foam Cannon Wash"]} />
              <ItemArrayX text={["Wheel, Rim & Tire Clean"]} />
              <ItemArrayX text={["Premium Towel Dry"]} />
              <ItemArrayX text={["Salt Protection on Carpets"]} />
              <ItemArrayX text={["Clay Bar Restoration"]} />
              <ItemArrayX text={["1 Step Paint Polish"]} />
              <ItemArrayX text={["Premium Ceramic Wax"]} />
              <ItemArrayX text={["Odor Removal"]} />

              <div className="text-center py-4">
                <BookButtonStyle
                  onClick={() => {
                    tawkMessenger.toggle()
                  }}
                  variant="contained"
                >
                  Book Now
                </BookButtonStyle>
              </div>
              <div className="text-center text-base text-gray-500">
                XL SUVs $145 & Vans/Trucks $155
              </div>
            </div>
          </div>
          <div className="w-6/7 sm:w-4/5 md:w-2/3 lg:w-1/3 mx-auto px-1 mb-6">
            <div className="relative p-10 rounded-lg border shadow-md bg-zinc-900 text-gray-200">
              <div className="absolute top-0 right-0 mt-0 mr-7 px-4 py-2 bg-[#e9e8e8] text-black font-semibold rounded-b-lg">
                Best Deal
              </div>
              <div className="text-xl font-medium py-2 flex items-center">
                <i className="mr-2 bi bi-circle-half" />
                Complete Detail
              </div>
              <div className="text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </div>
              <div className="text-4xl mb-4">
                $170 <span className="text-base text-gray-400">/ Starting</span>
              </div>
              <ItemArrayB text={["Full Interior & Trunk Vacuum"]} />
              <ItemArrayB text={["Full Wipe Down & Detail Brush Treatment"]} />
              <ItemArrayB text={["Advanced Steam Clean"]} />
              <ItemArrayB text={["Full Seat and Carpet Shampoo"]} />
              <ItemArrayB text={["Windows clean"]} />
              <ItemArrayB text={["Fabric Mat Shampoo"]} />
              <ItemArrayB text={["Rubber Mats Clean"]} />
              <ItemArrayB text={["Carpet Salt Stain Removal"]} />
              <ItemArrayB text={["Full Interior Protectant"]} />
              <ItemArrayB text={["Air Freshener"]} />
              <ItemArrayB text={["5 Stage Foam Cannon Wash"]} />
              <ItemArrayB text={["Wheel, Rim & Tire Clean"]} />
              <ItemArrayB text={["Premium Towel Dry"]} />
              <ItemArrayBX text={["Salt Protection on Carpets"]} />
              <ItemArrayBX text={["Clay Bar Restoration"]} />
              <ItemArrayBX text={["1 Step Paint Polish"]} />
              <ItemArrayBX text={["Premium Ceramic Wax"]} />
              <ItemArrayBX text={["Odor Removal"]} />
              <div className="text-center py-4">
                <BookButtonStyle
                  onClick={() => {
                    tawkMessenger.toggle()
                  }}
                  variant="contained"
                >
                  Book Now
                </BookButtonStyle>
              </div>
              <div className="text-center text-base text-gray-300">
                XL SUVs $190 & Vans/Trucks $200
              </div>
            </div>
          </div>
          <div className="w-6/7 sm:w-4/5 md:w-2/3 lg:w-1/3 mx-auto px-1 mb-6">
            <div className="relative p-10 rounded-lg border border-slate-400 shadow-md bg-white">
              <div className="text-xl font-medium py-2 flex items-center">
                <i className="mr-2 bi bi-circle-half" />
                Ultimate Detail
              </div>
              <div className="text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </div>
              <div className="text-4xl mb-4">
                $260 <span className="text-base text-gray-400">/ Starting</span>
              </div>
              <ItemArray text={["Full Interior & Trunk Vacuum"]} />
              <ItemArray text={["Full Wipe Down & Detail Brush Treatment"]} />
              <ItemArray text={["Advanced Steam Clean"]} />
              <ItemArray text={["Full Seat and Carpet Shampoo"]} />
              <ItemArray text={["Windows clean"]} />
              <ItemArray text={["Fabric Mat Shampoo"]} />
              <ItemArray text={["Rubber Mats Clean"]} />
              <ItemArray text={["Carpet Salt Stain Removal"]} />
              <ItemArray text={["Full Interior Protectant"]} />
              <ItemArray text={["Air Freshener"]} />
              <ItemArray text={["5 Stage Foam Cannon Wash"]} />
              <ItemArray text={["Wheel, Rim & Tire Clean"]} />
              <ItemArray text={["Premium Towel Dry"]} />
              <ItemArray text={["Salt Protection on Carpets"]} />
              <ItemArray text={["Clay Bar Restoration"]} />
              <ItemArray text={["1 Step Paint Polish"]} />
              <ItemArray text={["Premium Ceramic Wax"]} />
              <ItemArray text={["Odor Removal"]} />
              <div className="text-center py-4">
                <BookButtonStyle
                  onClick={() => {
                    tawkMessenger.toggle()
                  }}
                  variant="contained"
                >
                  Book Now
                </BookButtonStyle>
              </div>
              <div className="text-center text-base text-gray-500">
                XL SUVs $280 & Vans/Trucks $290
              </div>
            </div>
          </div>
          {/* <div className="w-full md:w-1/2 xl:w-1/4 px-3 mb-6">
            <div className="relative p-10 rounded-lg border border-yellow-600 shadow-md bg-white">
              <div className="text-xl font-medium pb-2 flex items-center">
                <i className="mr-2 bi bi-circle-half" />
                Deluxe Package
              </div>
              <div className="text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </div>
              <div className="text-4xl mb-4">
                $269 <span className="text-base text-gray-500">/ Starting</span>
              </div>
              <ItemArray text={["Full interior vacuum."]} />
              <ItemArray text={["Full soft brush wipe down"]} />
              <ItemArray text={["Compartment Restoration"]} />
              <ItemArray text={["Door Panel Restoration"]} />
              <ItemArray text={["Invisible interior glass"]} />
              <ItemArray text={["Dashboard Restoration"]} />
              <ItemArray text={["Floor Mats Restoration"]} />
              <ItemArray text={["Advanced Steam Cleaning"]} />
              <ItemArray text={["Full Seat and Carpet Extraction"]} />
              <ItemArray text={["UV Protection"]} />
              <ItemArray text={["Carpet Salt Stain Removal"]} />
              <ItemArray text={["Hand Wash"]} />
              <ItemArray text={["Pre-rinse"]} />
              <ItemArray text={["Wheel Rim and Tire Cleaner"]} />
              <ItemArray text={["Full Exterior Wash and Dry"]} />
              <ItemArray text={["Full Salt Stain Removal"]} />
              <ItemArray text={["Full Black Finish on all appliances"]} />
              <ItemArray text={["Full UV Protection"]} />
              <ItemArray text={["Salt Protection on Carpets"]} />
              <ItemArray text={["Full Exterior Detail"]} />
              <ItemArray text={["Invisible glass"]} />
              <ItemArray text={["Clay Bar Restoration"]} />
              <ItemArray text={["Complementary Cloth and ait Freshener"]} />
              <div className="text-center py-4">
                <BookButtonStyle
                  onClick={() => {
                    tawkMessenger.toggle();
                  }}
                  variant="contained"
                  className="bg-yellow-600 text-black w-3/4 hover:bg-yellow-700"
                >
                  Book Now
                </BookButtonStyle>
              </div>
              <div className="text-center text-base text-gray-500">
                $299 for 7 seater
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Packages

const ItemArray = ({ text }) => {
  return (
    <>
      {Array.isArray(text) &&
        text.map((v, i) => (
          <div key={i} className="flex items-start pb-2 capitalize">
            <i className="text-lg mr-4 bi bi-bookmark-check-fill" />
            {v}
          </div>
        ))}
    </>
  )
}

const ItemArrayX = ({ text }) => {
  return (
    <>
      {Array.isArray(text) &&
        text.map((v, i) => (
          <div
            key={i}
            className="flex items-start pb-2 line-through text-gray-400 capitalize"
          >
            <i className="text-lg mr-4 bi bi-bookmark-x-fill" />
            {v}
          </div>
        ))}
    </>
  )
}

const ItemArrayB = ({ text }) => {
  return (
    <>
      {Array.isArray(text) &&
        text.map((v, i) => (
          <div key={i} className="flex items-start pb-2 text-gray-200 capitalize">
            <i className="text-lg mr-4 bi bi-bookmark-check-fill" />
            {v}
          </div>
        ))}
    </>
  )
}

const ItemArrayBX = ({ text }) => {
  return (
    <>
      {Array.isArray(text) &&
        text.map((v, i) => (
          <div
            key={i}
            className="flex items-start pb-2 line-through text-gray-500 capitalize"
          >
            <i className="text-lg mr-4 bi bi-bookmark-x-fill" />
            {v}
          </div>
        ))}
    </>
  )
}
