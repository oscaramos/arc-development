import React from 'react'
import Lottie from 'react-lottie'
import Link from '../src/components/Link'

import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography, useMediaQuery } from '@material-ui/core'

import CallToAction from '../src/components/CallToAction'

import integrationAnimation from '../public/animations/integrationAnimation/data.json'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    padding: '2em 5em 10em 5em',
    [theme.breakpoints.down('sm')]: {
      padding: '1em 2em 10em 2em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0em 2em 10em 2em',
    },
  },
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
}))

function Mobileapps() {
  const classes = useStyles()

  const mobileOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preverseAspectRadio: 'xMidYMid slice',
    },
  }

  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <Grid container direction='column' className={classes.mainContainer}>
        {/*----- iOS/Android App Development -----*/}
        <Grid
          item container
          direction={matchesSM ? 'column' : 'row'}
          alignItems={matchesSM ? 'center' : undefined}
        >
          <Grid item className={classes.arrowContainer} style={{ marginRight: '1rem', marginLeft: '-3.5rem' }}>
            <Hidden mdDown>
              <IconButton style={{ backgroundColor: 'transparent' }} component={Link} href='/customsoftware'>
                <img src='/assets/backArrow.svg' alt='Back to Custom Software Page' />
              </IconButton>
            </Hidden>
          </Grid>
          <Grid item container direction='column' className={classes.heading}
                style={{ textAlign: matchesMD ? 'center' : undefined }}>
            <Grid item>
              <Typography variant='h2'>
                iOS/Android App Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Mobile apps allow you to take your tools on the go.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Whether you want an app for your customers, employees, or yourself,
                we can build cross-platform native solutions for any part of your business
                process. This opens you up to a whole new world of possibilities by taking
                advantage of phone features like the camera, GPS, push notifications, and more.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Convenience. Connection.
              </Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.arrowContainer}>
            <Hidden mdDown>
              <IconButton style={{ backgroundColor: 'transparent' }} component={Link} href='/websites'>
                <img src='/assets/forwardArrow.svg' alt='Forward to Websites Development' />
              </IconButton>
            </Hidden>
          </Grid>
        </Grid>

        {/*----- Integration and Simultaneous Platform Support -----*/}
        <Grid
          item container
          direction={matchesMD ? 'column' : 'row'}
          style={{ marginTop: '10em', textAlign: matchesMD ? 'center' : undefined }}
        >
          <Grid item container md direction='column'>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Integration
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Our technology enables an innate interconnection
                between web and mobile applications, putting everything
                you need right in one convenient place.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                This allows you to extend your reach, reinvent interactions,
                and develop a stronger relationship with your users than ever before.
              </Typography>
            </Grid>
          </Grid>

          <Grid item md>
            <Lottie options={mobileOptions} style={{ maxWidth: '20em' }} />
          </Grid>

          <Grid item container md direction='column' style={{ textAlign: matchesMD ? undefined : 'right' }}>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Simultaneous Platform Support
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Our cutting-edge development process allows us to create apps for
                iPhone, Android, and tablets — all at the same time.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                This significantly reduces costs and creates a more
                unified brand experience across all devices.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/*----- Extend Functionality, Access and Increase Engagement -----*/}
        <Grid
          item container
          direction={matchesMD ? 'column' : 'row'}
          style={{ marginTop: '15em', marginBottom: '15em' }}
        >
          <Grid item container md direction='column' alignItems='center'
                style={{ marginBottom: matchesMD ? '8em' : 0 }}>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Extend Functionality
              </Typography>
            </Grid>
            <Grid item>
              <img src='/assets/swissKnife.svg' alt='swiss knife' style={{ maxWidth: '28em' }} />
            </Grid>
          </Grid>

          <Grid item container md direction='column' alignItems='center'
                style={{ marginBottom: matchesMD ? '8em' : 0 }}>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Extend Access
              </Typography>
            </Grid>
            <Grid item>
              <img src='/assets/extendAccess.svg' alt='extend access' style={{ maxWidth: matchesSM ? '20em' : '28em' }} />
            </Grid>
          </Grid>

          <Grid item container md direction='column' alignItems='center'
                style={{ marginBottom: matchesMD ? '8em' : 0 }}>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Increase Engagement
              </Typography>
            </Grid>
            <Grid item>
              <img src='/assets/increaseEngagement.svg' alt='increase engagement' style={{ maxWidth: '28em' }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*----- Call To Action -----*/}
      <CallToAction />
    </>
  )
}

export default Mobileapps
