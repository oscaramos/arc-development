import React from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import footerAdornment from '../../assets/Footer Adornment.svg'


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
              <Grid item component={Link} to='/' className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to='/services' className={classes.link}>
                Services
              </Grid>
              <Grid item component={Link} to='/customsoftware' className={classes.link}>
                Custom Software Development
              </Grid>
              <Grid item component={Link} to='/mobileapps' className={classes.link}>
                Mobile App Development
              </Grid>
              <Grid item component={Link} to='/websites' className={classes.link}>
                Website Development
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to='/revolution' className={classes.link}>
                The Revolution
              </Grid>
              <Grid item component={Link} to='/revolution' className={classes.link}>
                Vision
              </Grid>
              <Grid item component={Link} to='/revolution' className={classes.link}>
                Technology
              </Grid>
              <Grid item component={Link} to='/revolution' className={classes.link}>
                Process
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to='/about' className={classes.link}>
                About Us
              </Grid>
              <Grid item component={Link} to='/about' className={classes.link}>
                History
              </Grid>
              <Grid item component={Link} to='/about' className={classes.link}>
                Team
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to='/contact' className={classes.link}>
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        src={footerAdornment}
        alt='black decorative slash'
        className={classes.adornment}
      />

      <Grid container justify='flex-end' className={classes.socialContainer} spacing={2}>
        <Grid item component="a" href="http://www.facebook.com" rel="noopenet noreferrer" target="_blank">
          <img alt='facebook logo' src={facebook} className={classes.socialIcon} />
        </Grid>
        <Grid item component="a" href="http://www.twitter.com" rel="noopenet noreferrer" target="_blank">
          <img alt='twitter logo' src={twitter} className={classes.socialIcon} />
        </Grid>
        <Grid item component="a" href="http://www.instagram.com" rel="noopenet noreferrer" target="_blank">
          <img alt='instagram logo' src={instagram} className={classes.socialIcon} />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
