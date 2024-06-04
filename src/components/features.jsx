import React from "react"
import {
  Text,
  SimpleGrid,
  Container,
  rem,
  MantineProvider,
} from "@mantine/core" // Import MantineProvider
import { IconTruck, IconCalendarPlus, IconCoin } from "@tabler/icons-react"
import * as classes from "../styles/FeaturesAsymmetrical.module.css"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

const SectionTitles = styled.div`
  font-size: 13pt;
  color: #8a8a8a;
  font-family: system-ui;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`

function Feature({ icon: Icon, title, description, className, ...others }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      className={classes.feature}
      {...others}
    >
      <div className={classes.overlay} />

      <div className={classes.content}>
        {/* Ensure that Icon is defined before using it */}
        {Icon && (
          <Icon
            style={{ width: rem(38), height: rem(38) }}
            className={classes.icon}
            stroke={1.5}
          />
        )}
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="md">
          {description}
        </Text>
      </div>
    </motion.div>
  )
}

const mockdata = [
  {
    icon: IconTruck,
    title: "Mobile & On Site Services",
    description:
      "We provide top-tier car detailing directly to you. With both on-site and mobile options.",
  },
  {
    icon: IconCoin,
    title: "Very Affordable Pricing",
    description:
      "Experience top-notch service without the high cost that won't strain your budget.",
  },
  {
    icon: IconCalendarPlus,
    title: "Book Online Now",
    description:
      "Lock in your car detailing appointment with ease by booking online with Auto Detail.",
  },
]

export function FeaturesAsymmetrical() {
  const items = mockdata.map(item => <Feature {...item} key={item.title} />)

  return (
    <>
      <SectionTitles className="text-center text-uppercase">
        Welcome
      </SectionTitles>
      <MantineProvider>
        <Container mt={30} mb={30} size="md">
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
            {items}
          </SimpleGrid>
        </Container>
      </MantineProvider>
    </>
  )
}
