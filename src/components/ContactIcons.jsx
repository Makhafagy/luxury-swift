
import { Text, Box, Stack, MantineProvider } from "@mantine/core"
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons-react"
import * as classes from "../styles/ContactIcons.module.css"
import React from "react"
const ContactIcon = ({ icon: Icon, title, description, ...others }) => {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: "1.5rem", height: "1.5rem" }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  )
}

const MOCKDATA = [
  { title: "Email", description: "hello@mantine.dev", icon: IconAt },
  { title: "Phone", description: "+49 (800) 335 35 35", icon: IconPhone },
  { title: "Address", description: "844 Morris Park avenue", icon: IconMapPin },
  { title: "Working hours", description: "8 a.m. - 11 p.m.", icon: IconSun },
]

const ContactIconsList = () => {
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ))
  return (
    <MantineProvider>
      <Stack>{items}</Stack>
    </MantineProvider>
  )
}

export default ContactIconsList










// import React from "react"
// import { IconMail, IconPhone, IconMapPin, IconClock } from "@tabler/icons-react"
// const ContactCard = () => {
//   return (
//     <div className="">
//     <div className="max-w-80 mx-auto  bg-opacity-50 shadow-xl rounded-lg overflow-hidden bg-[#228be619] ">
//       <div className="px-10 py-8 pb-24">
//         <h2 className="text-xl font-semibold mb-16 ">Contact Information</h2>
//         <div className="flex items-center mb-4">
//           <IconMail className="w-6 h-10 text-black mr-3" />
//           <span className="text-black font-medium">email@example.com</span>
//         </div>
//         <div className="flex items-center mb-4">
//           <IconPhone className="w-6 h-10 text-black mr-3" />
//           <span className="text-black font-medium">+123 456 7890</span>
//         </div>
//         <div className="flex items-center mb-4">
//           <IconMapPin className="w-6 h-10 text-black mr-3" />
//           <span className="text-black font-medium">123 Main St, Anytown, USA</span>
//         </div>
//         <div className="flex items-center">
//           <IconClock className="w-6 h-10 text-black mr-3" />
//           <span className="text-black font-medium">Mon-Fri: 9:00 AM - 5:00 PM</span>
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }
// export default ContactCard
