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
      "As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.",
  },
  {
    icon: IconCoin,
    title: "Very Affordable Pricing",
    description:
      "Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.",
  },
  {
    icon: IconCalendarPlus,
    title: "Book Online Now",
    description:
      "Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.",
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
