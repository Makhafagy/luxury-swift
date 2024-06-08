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
      <div className="bg-[#228be640] bg-opacity-20 sm:py-28 py-10 px-16 bg-[radial-gradient(#03546d1d_1px,transparent_1px)] [background-size:8px_8px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xl:w-5/6 2xl:w-3/4 mx-auto gap-6 xl:gap-14">
          <motion.div initial={{ opacity: 0, x:-40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.3 }} className="flex p-4">
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
          </motion.div>
          <motion.div initial={{ opacity: 0, x:40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.3 }} className="flex p-4">
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
          </motion.div>
          <motion.div initial={{ opacity: 0, x:-40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.3 }} className="flex p-4">
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
          </motion.div>
          <motion.div initial={{ opacity: 0, x:40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.3 }} className="flex p-4">
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
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default StatsGroup
