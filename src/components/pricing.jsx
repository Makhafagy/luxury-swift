import React from "react"
import ModalIndex from "./bookingSys"

import { motion } from "framer-motion"

const Packages = () => {
  return (
    <>
      <div className="text-center text-lg text-gray-600 font-pj capitalize mb-12 md:mb-5">
        Packages
      </div>
      <div className="text-3xl text-center uppercase mb-8 lg:text-5xl">
        Our Services
      </div>
      <div className="text-lg text-center text-gray-500 mb-12 mx-6 md:mx-3">
        Choose from a range of professional detailing packages designed to fit
        your needs and budget.
      </div>
      <div className="sm:container mx-auto 2xl:px-32">
        <div className="flex flex-wrap">
          <div className="w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/3 mx-auto px-1 mb-6">
            <div className="relative p-10 rounded-lg border border-slate-400 shadow-md bg-white">
              <div className="text-xl font-medium py-2 flex items-center">
                <i className="mr-2 bi bi-circle-half " />
                Interior Detail
              </div>
              <div className="text-base mb-4">
                Deep cleaning of your car’s interior to restore freshness and
                remove built-up dirt and odors.
              </div>
              {/* <div className="text-4xl mb-4">
                $125 <span className="text-base text-gray-500">/ Starting</span>
              </div> */}
              <ItemArray text={["Full Interior & Trunk Vacuum"]} />
              <ItemArray text={["Full Wipe Down & Detail Brush Treatment"]} />
              <ItemArray text={["Full Seat and Carpet Shampoo"]} />
              <ItemArray text={["Windows clean"]} />
              <ItemArray text={["Fabric Mat Shampoo"]} />
              <ItemArray text={["Rubber Mats Clean"]} />
              <ItemArray text={["Carpet Salt Stain Removal"]} />
              <ItemArray text={["Full Interior Protectant"]} />
              <ItemArray text={["Air Freshener"]} />
              <div className="text-center py-4">
                <ModalIndex />
              </div>
              {/* <div className="text-center text-base text-gray-500">
                XL SUVs $145 & Vans/Trucks $155
              </div> */}
            </div>
          </div>
          <div className="w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/3 mx-auto px-1 mb-6">
            <div className="relative p-10 rounded-lg border shadow-md bg-zinc-900 text-gray-200">
              {/* <div className="absolute top-0 right-0 mt-0 mr-7 px-4 py-2 bg-[#e9e8e8] text-black font-semibold rounded-b-lg">
                Best Deal
              </div> */}
              <div className="text-xl font-medium py-2 flex items-center">
                <i className="mr-2 bi bi-circle-half" />
                Exterior Detail
              </div>
              <div className="text-base mb-4">
                Restore your vehicle’s shine with a full exterior deep clean and
                protective wax.
              </div>
              <ItemArrayB text={["5 Stage Foam Cannon Wash"]} />
              <ItemArrayB text={["Wheel, Rim & Tire Clean"]} />
              <ItemArrayB text={["Premium Towel Dry"]} />
              <ItemArrayB text={["Exterior Trim & Mirror Clean"]} />
              <ItemArrayB text={["Bug & Tar Removal"]} />
              <ItemArrayB text={["Premium Wax Finish"]} />
              <div className="text-center py-4">
                <ModalIndex />
              </div>
              {/* <div className="text-center text-base text-gray-300">
                XL SUVs $190 & Vans/Trucks $200
              </div> */}
            </div>
          </div>
          <div className="w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/3 mx-auto px-1 mb-6">
            <div className="relative p-10 rounded-lg border border-purple-500 shadow-lg bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-700 text-white">
              <div className="text-xl font-medium py-2 flex items-center">
                <i className="mr-2 bi bi-sliders" />
                Custom Detail
              </div>
              <div className="text-base mb-4">
                Tailored detailing experience — choose your own services and
                build a package that fits your needs.
              </div>
              <ItemArrayCustom
                text={["Mix & Match Interior and Exterior Options"]}
              />
              <ItemArrayCustom text={["Flexible service add-ons"]} />
              <ItemArrayCustom text={["Flexible Pricing Based on Selection"]} />
              <div className="text-center py-4">
                <ModalIndex />
              </div>
              {/* <div className="text-center text-base text-gray-500">
                XL SUVs $280 & Vans/Trucks $290
              </div> */}
            </div>
          </div>
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            key={i}
            className="flex items-center pb-2 capitalize"
          >
            <i className="text-lg mr-4 bi bi-bookmark-check-fill" />
            {v}
          </motion.div>
        ))}
    </>
  )
}

const ItemArrayX = ({ text }) => {
  return (
    <>
      {Array.isArray(text) &&
        text.map((v, i) => (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            key={i}
            className="flex items-center pb-2 line-through text-gray-400 capitalize"
          >
            <i className="text-lg mr-4 bi bi-bookmark-x-fill" />
            {v}
          </motion.div>
        ))}
    </>
  )
}

const ItemArrayB = ({ text }) => {
  return (
    <>
      {Array.isArray(text) &&
        text.map((v, i) => (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            key={i}
            className="flex items-center pb-2 text-gray-200 capitalize"
          >
            <i className="text-lg mr-4 bi bi-bookmark-check-fill" />
            {v}
          </motion.div>
        ))}
    </>
  )
}

const ItemArrayBX = ({ text }) => {
  return (
    <>
      {Array.isArray(text) &&
        text.map((v, i) => (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            key={i}
            className="flex items-center pb-2 line-through text-gray-500 capitalize"
          >
            <i className="text-lg mr-4 bi bi-bookmark-x-fill" />
            {v}
          </motion.div>
        ))}
    </>
  )
}

const ItemArrayCombo = ({ text }) => {
  return (
    <>
      {Array.isArray(text) &&
        text.map((v, i) => (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            key={i}
            className="flex items-center pb-2 text-yellow-500 capitalize"
          >
            <i className="text-xl mr-4 bi bi-stars" />
            {v}
          </motion.div>
        ))}
    </>
  )
}

const ItemArrayComboX = ({ text }) => {
  return (
    <>
      {Array.isArray(text) &&
        text.map((v, i) => (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            key={i}
            className="flex items-center pb-2 line-through text-gray-400 capitalize"
          >
            <i className="text-xl mr-4 bi bi-x-circle" />
            {v}
          </motion.div>
        ))}
    </>
  )
}

const ItemArrayCustom = ({ text }) => {
  return (
    <>
      {Array.isArray(text) &&
        text.map((v, i) => (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            key={i}
            className="flex items-center pb-2 text-white capitalize"
          >
            <i className="text-lg mr-4 text-white bi bi-pencil-fill" />
            {v}
          </motion.div>
        ))}
    </>
  )
}
