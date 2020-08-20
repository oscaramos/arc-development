import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import logo from '../../assets/logo.svg'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '8em'
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: 25
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: 15,
    marginRight: 12,
    color: 'white',
    height: 45
  },
  menuPaper: {
    backgroundColor: theme.palette.common.arcBlue,
    color: 'white',
    borderRadius: 0
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  }
}))

// TODO: use disable* when possible
// TODO: refactor typography when possible
// TODO: MUI component over Others component

const Header = () => {
  const classes = useStyles()
  const location = useLocation()

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true)
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false)
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpen(false)
    setSelectedIndex(i)
  }

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ]

  useEffect(() => {
    if (location.pathname === '/') setValue(0)
    if (location.pathname === '/services') setValue(1)
    if (location.pathname === '/customsoftware') setValue(1)
    if (location.pathname === '/mobileapps') setValue(1)
    if (location.pathname === '/websites') setValue(1)
    if (location.pathname === '/revolution') setValue(2)
    if (location.pathname === '/about') setValue(3)
    if (location.pathname === '/contact') setValue(4)

    if (location.pathname === '/services') setSelectedIndex(0)
    if (location.pathname === '/customsoftware') setSelectedIndex(1)
    if (location.pathname === '/mobileapps') setSelectedIndex(2)
    if (location.pathname === '/websites') setSelectedIndex(3)

  }, [location.pathname])

  return (
    <>
      <ElevationScroll>
        <AppBar color='primary'>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              disableRipple
            >
              <img alt='company logo' src={logo} className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab className={classes.tab} component={Link} to="/" label="Home" />
              <Tab
                aria-owns={anchorEl? 'simple-menu': undefined}
                aria-haspopup={anchorEl? 'true': undefined}
                onMouseOver={handleClick}
                className={classes.tab} component={Link} to="/services" label="Services"
              />
              <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
              <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
              <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
            </Tabs>

            <Button variant="contained" color="secondary" className={classes.button}>
              Free Estimate
            </Button>
            <Menu
              id='simple-menu' anchorEl={anchorEl} open={open}
              onClose={handleClose} MenuListProps={{onMouseLeave: handleClose}}
              classes={{paper: classes.menuPaper}} elevation={0}
            >
              {
                menuOptions.map((menuOption, index) =>
                  <MenuItem
                    key={index}
                    className={classes.menuItem}
                    onClick={e => handleMenuItemClick(e, index)}
                    component={Link}
                    to={menuOption.link}
                    selected={index === selectedIndex}
                  >
                    {menuOption.name}
                  </MenuItem>
                )
              }
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
