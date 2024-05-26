import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import styled from "@emotion/styled"
import { Button } from "@mui/material"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { TawkContext } from "../providers"
// import BusinessName from "../images/business_name2.png"
import BusinessName1 from "../images/business_name.png"
import TopBar from "./topbar"

const Navbar = () => {
  return (
    <>
      <div>
        <TopBar />
      </div>
      <div>
        <AppNavBar />
      </div>
    </>
  )
}
export default Navbar

const ListItemButtonStyle = styled(ListItemButton)`
  text-transform: capitalize;
  transition: 0.2s;
  &:hover {
    color: blue;
  }
`

const AppBarStyle = styled(AppBar)`
  height: 80px;
  background: #ffffff;
  position: fixed;
  margin-top: 60.64px;
  /* border-top: 1px solid #242424; */
`

const LinksStyle = styled.a`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 16px;
  transition: 0.2s;
  &:hover {
    color: grey;
  }
`
const BookButtonStyle = styled(Button)`
  color: #000000;
  margin-left: 16px;
  background: #e9e8e8;
  white-space: nowrap;
  &:hover {
    background: #bbbbbb;
  }
`

const drawerWidth = 240

const AppNavBar = props => {
  const { tawkMessenger } = React.useContext(TawkContext)
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  

  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          src={BusinessName1}
          width={180}
          alt="logo"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemButtonStyle href="#About" sx={{ textAlign: "center" }}>
            <ListItemText primary="About" />
          </ListItemButtonStyle>
        </ListItem>
        <ListItem>
          <ListItemButtonStyle href="#Packages" sx={{ textAlign: "center" }}>
            <ListItemText primary="Packages" />
          </ListItemButtonStyle>
        </ListItem>
        <ListItem>
          <ListItemButtonStyle href="#Services" sx={{ textAlign: "center" }}>
            <ListItemText primary="Services" />
          </ListItemButtonStyle>
        </ListItem>
        <ListItem>
          <ListItemButtonStyle
            href="tel:+12269985884"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Call Us" />
          </ListItemButtonStyle>
        </ListItem>
        <ListItem>
          <ListItemButtonStyle href="#Gallery" sx={{ textAlign: "center" }}>
            <ListItemText primary="Gallery" />
          </ListItemButtonStyle>
        </ListItem>
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: "flex" }}>
      <AppBarStyle>
        <Toolbar sx={{ marginTop: "auto", marginBottom: "auto" }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: "dark", display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            <div
              href="/"
              style={{
                color: "black",
                textDecoration: "none",
                display: "flex",
              }}
            >
              <img src={BusinessName1} width={190} alt="logo" />
              {/* <span style={{ fontFamily: "sans-serif" }}>Daily Details </span>
              &nbsp;Ottawa */}
            </div>
          </Typography>

          <Box
            sx={{
              mr: 2,
              display: { xs: "none", md: "block" },
              whiteSpace: "nowrap",
            }}
            style={{ marginLeft: "auto" }}
          >
            <LinksStyle href="#About">About</LinksStyle>
            <LinksStyle href="#Packages">Packages</LinksStyle>
            <LinksStyle href="#Services">Services</LinksStyle>
            <LinksStyle href="tel:+12269985884">Call us</LinksStyle>
            <LinksStyle href="#Gallery">Gallery</LinksStyle>
            <BookButtonStyle
              onClick={() => {
                tawkMessenger.toggle()
              }}
              variant="contained"
            >
              Book Now
            </BookButtonStyle>
          </Box>
          <Box
            sx={{ mr: 2, display: { md: "none" } }}
            style={{ marginLeft: "auto" }}
          >
            <BookButtonStyle
              onClick={() => {
                tawkMessenger.toggle()
              }}
              variant="contained"
            >
              Book Now
            </BookButtonStyle>
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
