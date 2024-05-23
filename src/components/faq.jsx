import { Container, Title, Accordion, MantineProvider } from "@mantine/core"
import * as classes from "../styles/FaqSimple.module.css"
import React from "react"
const placeholder = [
  {
    q1: "Daily Details Ottawa offers a comprehensive range of services to keep your vehicle looking its best. This includes exterior detailing, interior cleaning, waxing, polishing, paint protection, stain removal, odor elimination, and more.",
  },
  {
    q2: "The frequency of detailing depends on many factors, such as the use of your vehicle (work truck, daily driver etc), the current season, and the condition of your vehicle. As a general guideline, Detailers recommend getting your car detailed every 2 to 4 months to maintain its appearance and protect its value.",
  },
  {
    q3: "Our exterior detailing service involves thorough cleaning and restoration of the exterior surfaces of your vehicle. This includes washing, drying, clay bar treatment, waxing, polishing, tire shining, and glass cleaning to leave your car looking shiny and rejuvenated.",
  },
  {
    q4: "Daily Details Ottawa focuses on restoring the cleanliness and freshness of your car's interior. We vacuum and shampoo carpets and upholstery, clean and condition leather surfaces, wipe down and sanitize all surfaces, including dashboard, door panels, and center console, and remove any stains or odors to ensure a clean and comfortable interior environment.",
  },
  {
    q5: "The duration of a detailing service depends on the size and condition of your vehicle, as well as the specific services requested. On average, a full detailing session can take anywhere from 2 to 6 hours, but we can provide a more accurate estimate upon evaluation of your vehicle.",
  },
]

export function FaqSimple() {
  return (
    <MantineProvider>
      <Container size="sm" className={classes.wrapper}>
        <Title ta="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion variant="separated">
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>
              What services does your car detailing business offer?
            </Accordion.Control>
            <Accordion.Panel>{placeholder[0].q1}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>
              How often should I get my car detailed?
            </Accordion.Control>
            <Accordion.Panel>{placeholder[1].q2}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>
              What is included in exterior detailing?
            </Accordion.Control>
            <Accordion.Panel>{placeholder[2].q3}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>
              What does interior cleaning do?
            </Accordion.Control>
            <Accordion.Panel>{placeholder[3].q4}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control>
              How long does a detailing service typically take?
            </Accordion.Control>
            <Accordion.Panel>{placeholder[4].q5}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </MantineProvider>
  )
}
