import React from 'react'
import Head from 'next/head'

import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import { Typography, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Link from '../src/components/Link'
import CallToAction from '../src/components/CallToAction'

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
  paragraphContainer: {
    maxWidth: '30em',
  },
}))

function Websites() {
  const classes = useStyles()

  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <Head>
        <title key='title'>Stunning Custom Website Design | Arc Development</title>
        <meta
          name='description'
          key='description'
          content='Completely custom designed and built from scratch to be blazing fast. Optimized code,
          server-side rendering, and perfect responsive design | 99% Page Speed Score'
        />
        <meta
          key='og:title'
          property='og:title'
          content='Bringing West Coast Technology to the Midwest | Websites'
        />
        <meta
          key='og:url'
          property='og:url'
          content='myUrl.com/websites'
        />
      </Head>
      <Grid container direction='column' className={classes.mainContainer}>
        {/*------ Website Development ------*/}
        <Grid
          item container
          direction={matchesSM ? 'column' : 'row'}
          alignItems={matchesSM ? 'center' : undefined}
        >
          <Grid item className={classes.arrowContainer} style={{ marginRight: '1rem', marginLeft: '-3.5rem' }}>
            <Hidden mdDown>
              <IconButton style={{ backgroundColor: 'transparent' }} component={Link} href='/mobileapps'>
                <img src='/assets/backArrow.svg' alt='Back to Mobile Apps Page' />
              </IconButton>
            </Hidden>
          </Grid>
          <Grid item container direction='column' className={classes.heading}
                style={{ textAlign: matchesMD ? 'center' : undefined }}>
            <Grid item>
              <Typography variant='h2'>
                Website Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Having a website is a necessity in today’s business world. They give you one central,
                public location to let people know who you are, what you do, and why you’re the best at it.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                From simply having your hours posted to having a full fledged online store, making yourself
                as accessible as possible to users online drives growth and enables you to reach new customers.
              </Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.arrowContainer}>
            <Hidden mdDown>
              <IconButton style={{ backgroundColor: 'transparent' }} component={Link} href='/services'>
                <img src='/assets/forwardArrow.svg' alt='Forward to Services Page' />
              </IconButton>
            </Hidden>
          </Grid>
        </Grid>

        {/*----- Analytics -----*/}
        <Grid
          item container
          direction={matchesSM ? 'column' : 'row'}
          alignItems='center'
          style={{ marginTop: '15em', textAlign: matchesSM ? 'center' : undefined }}
        >
          <Grid item>
            <Grid container direction='column'>
              <Grid item>
                <Typography variant='h4' align='center' gutterBottom>
                  Analytics
                </Typography>
              </Grid>
              <Grid item>
                <img src='/assets/analytics.svg' alt='analytics' style={{ marginLeft: '-2.75em' }} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Typography variant='body1' paragraph className={classes.paragraphContainer}>
              Knowledge is power, and data is 21st Century gold. Analyzing this data
              can reveal hidden patterns and trends in your business, empowering you
              to make smarter decisions with measurable effects.
            </Typography>
          </Grid>
        </Grid>

        {/*----- E-Commerce -----*/}
        <Grid
          item container
          direction={matchesSM ? 'column' : 'row'}
          justify='flex-end'
          alignItems='center'
          style={{ marginTop: '15em', textAlign: matchesSM ? 'center' : undefined }}
        >
          <Grid item>
            <Grid container direction='column'>
              <Grid item>
                <Typography variant='h4' align='center' gutterBottom>
                  E-Commerce
                </Typography>
              </Grid>
              <Grid item>
                <img src='/assets/ecommerce.svg' alt='world outline made of dollar signs' />
              </Grid>
            </Grid>
          </Grid>

          <Grid item style={{ marginLeft: '1em' }}>
            <Typography variant='body1' paragraph className={classes.paragraphContainer}>
              It’s no secret that people like to shop online.
            </Typography>
            <Typography variant='body1' paragraph className={classes.paragraphContainer}>
              In 2017 over $2.3 trillion was spent in e-commerce,
              and it’s time for your slice of that pie.
            </Typography>
          </Grid>
        </Grid>

        {/*----- Outreach -----*/}
        <Grid
          item container
          direction={matchesSM ? 'column' : 'row'}
          style={{ marginTop: '15em', textAlign: matchesSM ? 'center' : undefined }}
          alignItems='center'
        >
          <Grid item>
            <Grid container direction='column'>
              <Grid item>
                <Typography variant='h4' align='center' gutterBottom>
                  Outreach
                </Typography>
              </Grid>
              <Grid item>
                <img src='/assets/outreach.svg' alt='megaphone' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ marginLeft: '1em' }}>
            <Typography variant='body1' paragraph className={classes.paragraphContainer}>
              Draw people in with a dazzling website. Showing off your products online is a great way
              to help customers decide what’s right for them before visiting in person.
            </Typography>
          </Grid>
        </Grid>

        {/*----- SEO -----*/}
        <Grid
          item container
          direction={matchesSM ? 'column' : 'row'}
          justify='flex-end'
          alignItems='center'
          style={{ marginTop: '15em', textAlign: matchesSM ? 'center' : undefined }}
        >
          <Grid item>
            <Grid container direction='column'>
              <Grid item style={{ marginLeft: '-0em' }}>
                <Typography variant='h4' align='center' gutterBottom>
                  Search Engine <br /> Optimization
                </Typography>
              </Grid>
              <Grid item>
                <img src='/assets/seo.svg' alt="website stading on winner's podium" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ marginLeft: '1em' }}>
            <Typography variant='body1' paragraph className={classes.paragraphContainer}>
              How often have you ever been to the second page of Google results?
            </Typography>
            <Typography variant='body1' paragraph className={classes.paragraphContainer}>
              If you’re like us, probably never.
            </Typography>
            <Typography variant='body1' paragraph className={classes.paragraphContainer}>
              Customers don’t go there either, so we make sure your website is designed to end up on top.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <CallToAction />
    </>
  )
}

export default Websites
