import React from "react"
import {
  IconTrendingUp,
  IconMoodHeart,
  IconCar,
  IconRepeat,
} from "@tabler/icons-react"
import CountUp from "react-countup"
import { motion } from 'framer-motion';
const StatsGroup = () => {
  return (
    <>
      <div className="bg-[#228be640] bg-opacity-20 py-28 px-16 bg-[radial-gradient(#00000042_1px,transparent_1px)] [background-size:16px_16px]">
        <motion.div
          initial={{ opacity: 0, y: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xl:w-4/5 2xl:w-3/4 mx-auto">
          <div className="flex">
            <IconTrendingUp className=" text-blue-500 w-11 h-11 mr-6" />
            <div className="text-slate-800">
              <CountUp
                duration={2}
                prefix="$"
                enableScrollSpy
                scrollSpyOnce
                end={170}
                className="font-medium text-4xl"
              />
              <div className="text-2xl">Consumer Spending</div>
            </div>
          </div>
          <div className="flex p-4">
            <IconMoodHeart className="w-11 h-11 mr-6  text-blue-500" />
            <div className="text-slate-800">
              <CountUp
                duration={2}
                prefix="%"
                enableScrollSpy
                scrollSpyOnce
                end={99}
                className="font-medium text-4xl"
              />
              <div className="text-2xl">Satisfaction Rate</div>
            </div>
          </div>
          <div className="flex p-4">
            <IconCar className="w-11 h-11 mr-6  text-blue-500" />
            <div className="text-slate-800">
              <CountUp
                duration={2}
                suffix="&#5161;"
                enableScrollSpy
                scrollSpyOnce
                end={350}
                className="font-medium text-4xl"
              />
              <div className="text-2xl">Cars Detailed</div>
            </div>
          </div>
          <div className="flex p-4">
            <IconRepeat className="w-11 h-11 mr-6 text-blue-500" />
            <div className="text-slate-800">
              <CountUp
                duration={2}
                prefix="%"
                enableScrollSpy
                scrollSpyOnce
                end={96}
                className="font-medium text-4xl"
              />
              <div className="text-2xl">Repeat Customers</div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default StatsGroup
