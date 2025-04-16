import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  MantineProvider,
} from "@mantine/core"
import {
  IconBrandTiktok,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandGoogle,
  IconMap2,
} from "@tabler/icons-react"
import BusinessLogo from "../images/footer-logo.webp"
import * as classes from "../styles/FooterLinks.module.css"
import React from "react"

export function FooterLinks({ footerLinks = [] }) {
  const groups = footerLinks.map(group => {
    const links = group.links.map((link, index) => (
      <Text key={index} className={classes.link} component="a" href={link.href}>
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
            {/* <Text size="md" c="dimmed" className={classes.description}>
              
            </Text> */}
          </div>
          <div className={classes.groups}>{groups}</div>
        </Container>
        <Container className={classes.afterFooter}>
          <Text c="dimmed" size="md">
            Copyright © {new Date().getFullYear()}; Built by{" "}
            <a
              className="underline text-blue-800 duration-300 hover:text-white"
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
            <ActionIcon size="lg" variant="subtle">
              <IconBrandTiktok
                style={{ width: rem(20), height: rem(20) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" variant="subtle">
              <IconBrandFacebook
                style={{ width: rem(20), height: rem(20) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" variant="subtle">
              <IconBrandInstagram
                style={{ width: rem(20), height: rem(20) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" variant="subtle">
              <IconBrandGoogle
                style={{ width: rem(20), height: rem(20) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" variant="subtle">
              <IconMap2
                style={{ width: rem(20), height: rem(20) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </Container>
      </MantineProvider>
    </footer>
  )
}
