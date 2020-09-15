import React from 'react'
import Link from './Link'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.arcBlue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  gridItem: {
    margin: '3em'
  },
  socialIcon: {
    width: '4em',
    height: '4em',
    [theme.breakpoints.down("xs")]: {
      width: '2.5em',
      height: '2.5em',
    }
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      right: theme.spacing(1)
    }
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} href='/' className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} href='/services' className={classes.link}>
                Services
              </Grid>
              <Grid item component={Link} href='/customsoftware' className={classes.link}>
                Custom Software Development
              </Grid>
              <Grid item component={Link} href='/mobileapps' className={classes.link}>
                iOS/App Development
              </Grid>
              <Grid item component={Link} href='/websites' className={classes.link}>
                Website Development
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} href='/revolution' className={classes.link}>
                The Revolution
              </Grid>
              <Grid item component={Link} href='/revolution' className={classes.link}>
                Vision
              </Grid>
              <Grid item component={Link} href='/revolution' className={classes.link}>
                Technology
              </Grid>
              <Grid item component={Link} href='/revolution' className={classes.link}>
                Process
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} href='/about' className={classes.link}>
                About Us
              </Grid>
              <Grid item component={Link} href='/about' className={classes.link}>
                History
              </Grid>
              <Grid item component={Link} href='/about' className={classes.link}>
                Team
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} href='/contact' className={classes.link}>
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        src='/assets/Footer Adornment.svg'
        alt='black decorative slash'
        className={classes.adornment}
      />

      <Grid container justify='flex-end' className={classes.socialContainer} spacing={2}>
        <Grid item component="a" href="http://www.facebook.com" rel="noopenet noreferrer" target="_blank">
          <img alt='facebook logo' src='/assets/facebook.svg' className={classes.socialIcon} />
        </Grid>
        <Grid item component="a" href="http://www.twitter.com" rel="noopenet noreferrer" target="_blank">
          <img alt='twitter logo' src='/assets/twitter.svg' className={classes.socialIcon} />
        </Grid>
        <Grid item component="a" href="http://www.instagram.com" rel="noopenet noreferrer" target="_blank">
          <img alt='instagram logo' src='/assets/instagram.svg' className={classes.socialIcon} />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
