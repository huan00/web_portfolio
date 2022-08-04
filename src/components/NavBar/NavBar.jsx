import { AppBar, Toolbar, Box, Typography } from '@mui/material'

import logo from '../../images/hz_logo.png'
import { navBarStyles } from './styles'

const NavBar = () => {
  return (
    <AppBar sx={navBarStyles.root} position="static" color="inherit">
      <Box sx={navBarStyles.imageBox}>
        <img style={navBarStyles.image} src={logo} alt="logo" height="60" />
      </Box>
      <Toolbar sx={navBarStyles.toolbar}>
        <Typography variant="h6">About</Typography>
        <Typography variant="h6">Projects</Typography>
        <Typography variant="h6">Resume</Typography>
        <Typography variant="h6">Contact</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
