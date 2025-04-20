import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  MantineProvider,
} from "@mantine/core"
import { IconBrandTiktok, IconBrandInstagram } from "@tabler/icons-react"
import BusinessLogo from "../images/footer-logo.webp"
import * as classes from "../styles/FooterLinks.module.css"
import React from "react"

export function FooterLinks({ footerLinks = [] }) {
  const groups = footerLinks.map(group => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label}
      </Text>
    ))

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    )
  })

  return (
    <footer className={classes.footer}>
      <MantineProvider>
        <Container className={classes.inner}>
          <div className={classes.logo}>
            <img
              className="w-auto"
              src={BusinessLogo}
              loading="lazy"
              alt="logo"
            />
          </div>
          <div className={classes.groups}>{groups}</div>
        </Container>
        <Container className={classes.afterFooter}>
          <Text c="dimmed" size="md">
            Copyright © {new Date().getFullYear()}; Built by{" "}
            <a
              className="underline text-blue-300 duration-300 hover:text-white"
              target="_blank"
              rel="noreferrer"
              href="https://luxuryswift.net/"
            >
              Luxury Swift LLC
            </a>
          </Text>

          <Group
            gap={0}
            className={classes.social}
            justify="flex-end"
            wrap="nowrap"
          >
            <a
              href="https://www.tiktok.com/@luxuryswift_detailing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionIcon size="lg" variant="subtle">
                <IconBrandTiktok
                  style={{ width: rem(20), height: rem(20) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </a>

            <a
              href="https://www.instagram.com/luxuryswift_autodetailing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionIcon size="lg" variant="subtle">
                <IconBrandInstagram
                  style={{ width: rem(20), height: rem(20) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </a>
          </Group>
        </Container>
      </MantineProvider>
    </footer>
  )
}
