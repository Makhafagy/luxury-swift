import React from "react";
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  MantineProvider,
  Container, // Import Container from Mantine
} from "@mantine/core";
import ContactIconsList from "./ContactIcons";
import bg from "../images/bg.svg";
import * as classes from "../styles/GetInTouch.module.css";

export function GetInTouch() {
  return (
    <MantineProvider defaultColorScheme="light">
    
      <Container size="lg">
        <Paper shadow="md" radius="lg">
          <div className={classes.wrapper}>
            <div
              className={classes.contacts}
              style={{ backgroundImage: `url(${bg})` }}
            >
              <Text fz="lg" fw={700} className={classes.title} c="#fff">
                Contact information
              </Text>

              <ContactIconsList />
            </div>

            <form
              className={classes.form}
              onSubmit={(event) => event.preventDefault()}
            >
              <Text fz="lg" fw={700} className={classes.title}>
                Get in touch
              </Text>

              <div className={classes.fields}>
                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                  <TextInput label="Your name" placeholder="Your name" />
                  <TextInput
                    label="Your email"
                    placeholder="hello@mantine.dev"
                    required
                  />
                </SimpleGrid>

                <TextInput
                  mt="md"
                  label="Subject"
                  placeholder="Subject"

                />

                <Textarea
                  mt="md"
                  label="Your message"
                  placeholder="Please include all relevant information"
                  minRows={4}
                />

                <Group justify="flex-end" mt="md">
                  <Button type="submit" className={classes.control}>
                    Send message
                  </Button>
                </Group>
              </div>
            </form>
          </div>
        </Paper>
      </Container>
    </MantineProvider>
  );
}
