import React from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'

import LearnMoreButton from '../components/LearnMoreButton'

import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
  },
  servicesContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em',
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.arcOrange,
  },
}))


function Services() {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid container direction='column'>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          marginTop: matchesSM ? '1em': '2em',
          textAlign: matchesSM ? 'center' : undefined
        }}
      >
        <Typography variant='h2' gutterBottom>
          Services
        </Typography>
      </Grid>
      {/*----- iOS/Android block ------ */}
      <Grid
        container direction='row'
        className={classes.servicesContainer}
        justify={matchesSM ? 'center' : 'flex-end'}
        style={{ marginTop: matchesSM? '1em': '5em' }}
      >
        <Grid item style={{ width: matchesSM ? undefined : '35em', textAlign: matchesSM ? 'center' : undefined }}>
          <Typography variant='h4'>
            iOS/Android App Development
          </Typography>
          <Typography variant='subtitle1' className={classes.subtitle}>
            Extend Functionality. Extend Access. Increase Engagement.
          </Typography>
          <Typography variant='subtitle1'>
            Integrate your web experience or create a standalone
            {matchesSM ? null : <br />} with either mobile platform.
          </Typography>
          <LearnMoreButton
            className={classes.learnButton}
            color={theme.palette.common.arcBlue}
            component={Link} to='/mobileapps'
          />
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
          <img className={classes.icon} alt='mobile apps icon' src={mobileAppsIcon} width='250em' />
        </Grid>
      </Grid>

      {/*----- Custom Software Block ------ */}
      <Grid
        container direction='row'
        className={classes.servicesContainer}
        justify={matchesSM ? 'center' : undefined}
      >
        <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}>
          <Typography variant='h4'>
            Custom Software Development
          </Typography>
          <Typography variant='subtitle1' className={classes.subtitle}>
            Save Energy. Save Time. Save Money
          </Typography>
          <Typography variant='subtitle1'>
            Complete digital solutions, from investigation to <span className={classes.specialText}>celebration</span>
          </Typography>
          <LearnMoreButton
            className={classes.learnButton}
            color={theme.palette.common.arcBlue}
            component={Link} to='/customsoftware'
          />
        </Grid>
        <Grid item>
          <img className={classes.icon} alt='custom software icon' src={customSoftwareIcon} />
        </Grid>
      </Grid>

      {/*----- Websites Block ------ */}
      <Grid
        container direction='row'
        className={classes.servicesContainer}
        justify={matchesSM ? 'center' : 'flex-end'}
        style={{ marginBottom: '10em' }}
      >
        <Grid item style={{ width: matchesSM ? undefined : '35em', textAlign: matchesSM ? 'center' : undefined }}>
          <Typography variant='h4'>
            Website Development
          </Typography>
          <Typography variant='subtitle1' className={classes.subtitle}>
            React More. Discover More. Sell More.
          </Typography>
          <Typography variant='subtitle1'>
            Optimized for Search Engines, built for speed.
          </Typography>
          <LearnMoreButton
            className={classes.learnButton}
            color={theme.palette.common.arcBlue}
            component={Link} to='/websites'
          />
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
          <img className={classes.icon} alt='websites icon' src={websitesIcon} width='250em' />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Services
