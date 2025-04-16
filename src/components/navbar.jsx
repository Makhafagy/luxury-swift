import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import BusinessName1 from "../images/luxury-swift-logo.webp"
import ModalIndex from "./modal"

const ListItemButtonStyle = styled(ListItemButton)`
  text-transform: capitalize;
  transition: 0.2s;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  &:hover {
    color: blue;
  }
`

const AppBarStyle = styled(AppBar)`
  height: 80px;
  background: #181818;
  position: fixed;
  align-self: center;
  display: flex;
  justify-content: space-between;
  padding: 0 16px; // Adjust the left and right margins for the navbar
`

const LinksStyle = styled.a`
  color: #adadad;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 16px;
  white-space: nowrap;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: transparent;
    transition: width 0.4s ease;
  }

  &:hover:after {
    width: 100%;
    background-color: #228be6;
  }
`
const drawerWidth = 240

const AppNavBar = ({ window, links = [] }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        Luxury Swift
      </Typography>
      <Divider />
      <List>
        {links.map((v, i) => (
          <ListItem key={i}>
            <ListItemButtonStyle href={v.href} sx={{ textAlign: "center" }}>
              <ListItemText primary={v.label} />
            </ListItemButtonStyle>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: "flex" }}>
      <AppBarStyle>
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, color: "white", display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            <a
              href="/"
              style={{
                display: "inline-block",
                height: "120px", // Make sure the anchor height matches the logo's height
              }}
            >
              <img
                loading="lazy"
                src={BusinessName1}
                alt="logo"
                className="h-[110px] md:h-[130px] w-auto"
                style={{
                  display: "block",
                  marginBottom: 0,
                }}
              />
            </a>
          </Typography>

          <Box
            sx={{
              mr: 2,
              display: { xs: "none", md: "block" },
              whiteSpace: "nowrap",
            }}
            style={{ marginLeft: "auto" }}
          >
            {links.map((v, i) => (
              <LinksStyle disabled={v.disabled} key={i} href={v.href}>
                {v.label}
              </LinksStyle>
            ))}
            <span className="ms-4">
              <ModalIndex />
            </span>
          </Box>
          <Box
            sx={{ mr: 2, display: { md: "none" } }}
            style={{ marginLeft: "auto" }}
          >
            <span className="ms-4">
              <ModalIndex />
            </span>
          </Box>
        </Toolbar>
      </AppBarStyle>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}
export default AppNavBar
