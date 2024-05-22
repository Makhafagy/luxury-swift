import React from "react"
import { IconMail, IconPhone, IconMapPin, IconClock } from "@tabler/icons-react"

const ContactCard = () => {
  return (
    <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
      <div className="max-w-80 mx-auto bg-slate-500 shadow-xl rounded-lg overflow-hidden">
        <div className="px-10 py-8 pb-28">
          <h2 className="text-xl font-semibold mb-16 ">Contact Information</h2>
          <div className="flex items-center mb-4">
            <IconMail className="w-6 h-10 text-gray-200 mr-3" />
            <span className="text-gray-300">email@example.com</span>
          </div>
          <div className="flex items-center mb-4">
            <IconPhone className="w-6 h-10 text-gray-200 mr-3" />
            <span className="text-gray-300">+123 456 7890</span>
          </div>
          <div className="flex items-center mb-4">
            <IconMapPin className="w-6 h-10 text-gray-200 mr-3" />
            <span className="text-gray-300">123 Main St, Anytown, USA</span>
          </div>
          <div className="flex items-center">
            <IconClock className="w-6 h-10 text-gray-200 mr-3" />
            <span className="text-gray-300">Mon-Fri: 9:00 AM - 5:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
