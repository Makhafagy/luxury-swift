import { Container, Title, Accordion, MantineProvider } from "@mantine/core"
import * as classes from "../styles/FaqSimple.module.css"
import React from "react"
import { IconHelpOctagon } from '@tabler/icons-react';
const placeholder = [
  {
    icon:'?',
    q1: "Car detailing is a thorough cleaning and reconditioning process for your vehicle, both inside and out. Unlike a regular car wash, detailing involves deep cleaning, polishing, and protecting various surfaces to restore your car's best condition.",
  },
  {
    q2: "The frequency of detailing depends on many factors, such as the use of your vehicle (work truck, daily driver etc), the current season, and the condition of your vehicle. As a general guideline, Detailers recommend getting your car detailed every 2 to 4 months to maintain its appearance and protect its value.",
  },
  {
    q3: "Exterior: wash, polish, wax, wheel, and tire treatment. Interior: vacuum, shampoo, leather care, and surface detailing.",
  },
  {
    q4: "Typically 2 to 5 hours, but varies based on vehicle size and condition.",
  },
  {
    q5: "Yes, we offer mobile detailing services for your convenience. Schedule an appointment.",
  },
]

export function FaqSimple() {
  return (
    <MantineProvider>
      <Container size="md" className={classes.wrapper}>
        <Title ta="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion variant="separated">
          <Accordion.Item className={classes.item} value="difference">
            <Accordion.Control fz="lg" icon={<IconHelpOctagon className="text-blue-600"/>}>
            <strong>What is car detailing and how does it differ from a regular car wash?</strong>
            </Accordion.Control>
            <Accordion.Panel fz="lg" lh="lg">{placeholder[0].q1}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="often clean">
            <Accordion.Control fz="lg" icon={<IconHelpOctagon className="text-blue-600"/>}>
            <strong>How often should I have my car detailed?</strong>
            </Accordion.Control>
            <Accordion.Panel fz="lg" lh="lg">{placeholder[1].q2}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="services">
            <Accordion.Control fz="lg" icon={<IconHelpOctagon className="text-blue-600"/>}>
              <strong>What services are included in a full car detailing package?</strong>
            </Accordion.Control>
            <Accordion.Panel fz="lg" lh="lg">{placeholder[2].q3}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="duration">
            <Accordion.Control fz="lg" icon={<IconHelpOctagon className="text-blue-600"/>}>
            <strong>How long does a car detailing service take?</strong>
            </Accordion.Control>
            <Accordion.Panel fz="lg" lh="lg">{placeholder[3].q4}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="location">
            <Accordion.Control fz="lg" icon={<IconHelpOctagon className="text-blue-600"/>}>
              <strong>Can you detail my car at my home or workplace?</strong>
            </Accordion.Control>
            <Accordion.Panel fz="lg" lh="lg">{placeholder[4].q5}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </MantineProvider>
  )
}
