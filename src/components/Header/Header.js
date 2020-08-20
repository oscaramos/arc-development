import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/logo.svg'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


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
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    }
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    }
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
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  drawerIcon: {
    height: 50,
    width: 50
  },
  drawerPaper: {
    backgroundColor: theme.palette.common.arcBlue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7
  },
  drawerItemEstimate: {
    ...theme.typography.tab,
    backgroundColor: theme.palette.common.arcOrange,
    color: 'white',
    opacity: 1
  },
  drawerItemSelected: {
    opacity: 1
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
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

  const theme = useTheme()
  const matchMD = useMediaQuery(theme.breakpoints.down('md'))

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
    { link: "/services", name: "Services", activeIndex: 0},
    { link: "/customsoftware", name: "Custom Software Development", activeIndex: 1},
    { link: "/mobileapps", name: "Mobile App Development", activeIndex: 2},
    { link: "/websites", name: "Website Development", activeIndex: 3},
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

    menuOptions.forEach(menuOption => {
      if (location.pathname === menuOption.link) setSelectedIndex(menuOption.activeIndex)
    })
  }, [location.pathname, menuOptions])

  const tabs = (
    <>
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
    </>
  )

  const [openDrawer, setOpenDrawer] = useState(true);
  const [drawerIndex, setDrawerIndex] = useState(0);

  const drawerItems = [
    { link: '/', name: 'Home', activeIndex: 0},
    { link: '/services', name: 'Services', activeIndex: 1},
    { link: '/revolution', name: 'The revolution', activeIndex: 2},
    { link: '/about', name: 'About us', activeIndex: 3},
    { link: '/contact', name: 'Contact us', activeIndex: 4},
    { link: '/estimate', name: 'Free estimate', activeIndex: 5,
      className: classes.drawerItemEstimate},
  ]

  useEffect(() => {
    drawerItems.forEach(drawerItem => {
      if (location.pathname === drawerItem.link) setDrawerIndex(drawerItem.activeIndex)
    })
  }, [location.pathname, drawerItems])

  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {
            drawerItems.map((drawerItem, index) => (
              <ListItem
                key={index}
                className={drawerItem.className}
                divider button onClick={() => setOpenDrawer(false)}
                component={Link} to={drawerItem.link}
                selected={drawerIndex === index}
                classes={{ selected: classes.drawerItemSelected }}
              >
                <ListItemText
                  disableTypography
                  className={classes.drawerItem}
                >
                  {drawerItem.name}
                </ListItemText>
              </ListItem>
            ))
          }
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(true)}>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  )

  return (
    <>
      <ElevationScroll>
        <AppBar color='primary' className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              disableRipple
            >
              <img alt='company logo' src={logo} className={classes.logo} />
            </Button>

            {
              matchMD
                ? drawer
                : tabs
            }

            <Menu
              id='simple-menu' anchorEl={anchorEl} open={open}
              onClose={handleClose} MenuListProps={{onMouseLeave: handleClose}}
              classes={{paper: classes.menuPaper}} elevation={0}
              style={{ zIndex: 1302 }}
              keepMounted
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
