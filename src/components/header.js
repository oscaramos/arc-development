import React, { useEffect, useState } from 'react'
import Link from './Link'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import GoldenButton from './GoldenButton'


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
  freeEstimateButton: {
    marginLeft: 15,
    marginRight: 12,
    height: 45,
    width: 190
  },
  menuPaper: {
    backgroundColor: theme.palette.common.arcBlue,
    color: 'white',
    borderRadius: 0
  },
  menuItem: {
    ...theme.typography.tab,
    color: 'white',
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

function Header() {
  const classes = useStyles()
  const router = useRouter()

  const [value, setValue] = useState(0)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [open, setOpen] = useState(false)

  const [selectedIndex, setSelectedIndex] = useState(0)

  const theme = useTheme()
  const matchMD = useMediaQuery(theme.breakpoints.down('md'))

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpen(false)
    setSelectedIndex(i)
  }

  useEffect(() => {
    ReactGA.pageview(router.pathname + window.location.search)
  }, [router.pathname])

  const menuOptions = [
    { link: '/services', name: 'Services', activeIndex: 0 },
    { link: '/customsoftware', name: 'Custom Software Development', activeIndex: 1 },
    { link: '/mobileapps', name: 'iOS/Android App Development', activeIndex: 2 },
    { link: '/websites', name: 'Website Development', activeIndex: 3 },
  ]

  useEffect(() => {
    if (router.pathname === '/') setValue(0)
    if (router.pathname === '/services') setValue(1)
    if (router.pathname === '/customsoftware') setValue(1)
    if (router.pathname === '/mobileapps') setValue(1)
    if (router.pathname === '/websites') setValue(1)
    if (router.pathname === '/revolution') setValue(2)
    if (router.pathname === '/about') setValue(3)
    if (router.pathname === '/contact') setValue(4)
    if (router.pathname === '/estimate') setValue(5)

    menuOptions.forEach(menuOption => {
      if (router.pathname === menuOption.link) setSelectedIndex(menuOption.activeIndex)
    })
  }, [router.pathname, menuOptions])

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor='primary'
      >
        <Tab className={classes.tab} component={Link} href='/' label='Home' />
        <Tab
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup={anchorEl ? 'true' : undefined}
          onMouseOver={handleClick}
          className={classes.tab} component={Link} href='/services' label='Services'
        />
        <Tab className={classes.tab} component={Link} href='/revolution' label='The Revolution' />
        <Tab className={classes.tab} component={Link} href='/about' label='About Us' />
        <Tab className={classes.tab} component={Link} href='/contact' label='Contact Us' />

        <Tab className={classes.tab} component={Link} href='/estimate' label='Contact Us' style={{ display: 'none' }} />
      </Tabs>
      <GoldenButton component={Link} href='/estimate' className={classes.freeEstimateButton}>
        Free Estimate
      </GoldenButton>
    </>
  )

  const [openDrawer, setOpenDrawer] = useState(false)
  const [drawerIndex, setDrawerIndex] = useState(0)

  const drawerItems = [
    { link: '/', name: 'Home', activeIndex: 0 },
    { link: '/services', name: 'Services', activeIndex: 1 },
    { link: '/revolution', name: 'The revolution', activeIndex: 2 },
    { link: '/about', name: 'About us', activeIndex: 3 },
    { link: '/contact', name: 'Contact us', activeIndex: 4 },
    {
      link: '/estimate', name: 'Free estimate', activeIndex: 5,
      className: classes.drawerItemEstimate,
    },
  ]

  useEffect(() => {
    drawerItems.forEach(drawerItem => {
      if (router.pathname === drawerItem.link) setDrawerIndex(drawerItem.activeIndex)
    })
  }, [router.pathname, drawerItems])

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
                divider
                button
                onClick={() => { setOpenDrawer(false); ReactGA.event({ category: 'User', action: `Pressed drawer button ${drawerItem.name}`}) }}
                component={Link}
                href={drawerItem.link}
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
              href="/"
              className={classes.logoContainer}
              disableRipple
            >
              <img alt='company logo' src='/assets/logo.svg' className={classes.logo} />
            </Button>

            {
              matchMD
                ? drawer
                : tabs
            }

            <Menu
              id='simple-menu' anchorEl={anchorEl} open={open}
              onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }}
              classes={{ paper: classes.menuPaper }} elevation={0}
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
                    href={menuOption.link}
                    selected={index === selectedIndex}
                  >
                    {menuOption.name}
                  </MenuItem>,
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
