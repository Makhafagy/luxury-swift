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
import BusinessLogo from "../images/dailyLogo.png"
import * as classes from "../styles/FooterLinks.module.css"
import React from "react"
const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Stats", link: "#" },
      { label: "FAQ", link: "#" },
      { label: "Terms & Conditions", link: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Packages", link: "#" },
      { label: "Add-ons", link: "#" },
      { label: "Mobile Detailing", link: "#" },
      { label: "Ceramic Coating", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
]

export function FooterLinks() {
  const groups = data.map(group => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={event => event.preventDefault()}
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
            <img className="size-14" src={BusinessLogo} alt="logo"/>
            <Text size="md" c="dimmed" className={classes.description}>
              Daily Details Ottawa
            </Text>
          </div>
          <div className={classes.groups}>{groups}</div>
        </Container>
        <Container className={classes.afterFooter}>
          <Text c="dimmed" size="md">
          Copyright © {new Date().getFullYear()}; Built by{" "}
          <a
            className="underline text-blue-800 duration-300 hover:text-black"
            target="_blank"
            rel="noreferrer"
            href="https://hussainalnakhli.com/"
          >Hussain Alnakhli
          </a>
          </Text>

          <Group
            gap={0}
            className={classes.social}
            justify="flex-end"
            wrap="nowrap"
          >
            <ActionIcon size="lg" color="dark" variant="subtle">
              <IconBrandTiktok
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" color="dark" variant="subtle">
              <IconBrandFacebook
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" color="dark" variant="subtle">
              <IconBrandInstagram
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" color="dark" variant="subtle">
              <IconBrandGoogle
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" color="dark" variant="subtle">
              <IconMap2
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </Container>
      </MantineProvider>
    </footer>
  )
}
