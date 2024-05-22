import React from "react"
import { IconTrendingUp, IconMoodHeart, IconCar, IconRepeat } from "@tabler/icons-react"
import CountUp from "react-countup"
const StatsGroup = () => {
 
  return (
    <>
      <div className="bg-[#bdbdbd] bg-opacity-20 py-10 px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
          <div className="flex p-4">
            <IconTrendingUp className="text-[#228be6] text-opacity-50 w-11 h-11 mr-6" />
            <div>
              <CountUp duration={3} prefix="$" enableScrollSpy scrollSpyOnce end={170} className="font-medium text-4xl"/>
              <div className="text-2xl">Consumer Spending</div>
            </div>
          </div>
          <div className="flex p-4">
            <IconMoodHeart className="w-11 h-11 mr-6"/>
            <div>
              <CountUp duration={3} prefix="%" enableScrollSpy scrollSpyOnce end={99} className="font-medium text-4xl"/>
              <div className="text-2xl">Satisfaction Rate</div>
            </div>
          </div>
          <div className="flex p-4">
            <IconCar className="w-11 h-11 mr-6" />
            <div>
              <CountUp duration={2} suffix="&#5161;" enableScrollSpy scrollSpyOnce end={350} className="font-medium text-4xl"/>
              <div className="text-2xl">Cars Detailed</div>
            </div>
          </div>
          <div className="flex p-4">
            <IconRepeat className="w-11 h-11 mr-6" />
            <div>
              <CountUp duration={3} prefix="%" enableScrollSpy scrollSpyOnce end={96} className="font-medium text-4xl"/>
              <div className="text-2xl">Repeat Customers</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StatsGroup
