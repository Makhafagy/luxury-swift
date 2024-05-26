import React from "react"
import { IconMail, IconPhone, IconMapPin, IconClock } from "@tabler/icons-react"
const ContactCard = () => {
  return (
    <div className="">
    <div className="max-w-80 mx-auto  bg-opacity-50 shadow-xl rounded-lg overflow-hidden bg-blue-500 ">
      <div className="px-10 py-8 pb-24">
        <h2 className="text-xl font-semibold mb-16 ">Contact Information</h2>
        <div className="flex items-center mb-4">
          <IconMail className="w-6 h-10 text-black mr-3" />
          <span className="text-black font-medium">email@example.com</span>
        </div>
        <div className="flex items-center mb-4">
          <IconPhone className="w-6 h-10 text-black mr-3" />
          <span className="text-black font-medium">+123 456 7890</span>
        </div>
        <div className="flex items-center mb-4">
          <IconMapPin className="w-6 h-10 text-black mr-3" />
          <span className="text-black font-medium">123 Main St, Anytown, USA</span>
        </div>
        <div className="flex items-center">
          <IconClock className="w-6 h-10 text-black mr-3" />
          <span className="text-black font-medium">Mon-Fri: 9:00 AM - 5:00 PM</span>
        </div>
      </div>
    </div>
    </div>
  )
}
export default ContactCard
