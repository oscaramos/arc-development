import React from 'react'
import Link from '../src/components/Link'
import Lottie from 'react-lottie'
import Head from 'next/head'

import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography, useMediaQuery } from '@material-ui/core'

import documentsAnimation from '../public/animations/documentsAnimation/data'
import scaleAnimation from '../public/animations/scaleAnimation/data.json'
import automationAnimation from '../public/animations/automationAnimation/data.json'
import uxAnimation from '../public/animations/uxAnimation/data'

import CallToAction from '../src/components/CallToAction'


const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  mainContainer: {
    padding: '2em 5em 10em 5em',
    [theme.breakpoints.down('sm')]: {
      padding: '1em 2em 10em 2em',
    },
    [theme.breakpoints.down("xs")]: {
      padding: '0em 2em 10em 2em',
    }
  },
  itemContainer: {
    maxWidth: '40em',
  },
}))


function Customsoftware() {
  const classes = useStyles()

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preverseAspectRadio: 'xMidYMid slice',
    },
  }

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preverseAspectRadio: 'xMidYMid slice',
    },
  }

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preverseAspectRadio: 'xMidYMid slice',
    },
  }

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
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
        <Head>
          <title key='title'>Custom Software Development and Design - Free Estimate</title>
          <meta
            name='description'
            key='description'
            content='Cutting-edge custom software development with gorgeous designs from scratch - let us
            optimize your business, solving problems instead of creating new ones.'
          />
        </Head>
        {/*----- Custom Software Development -----*/}
        <Grid
          item container
          direction={matchesSM ? 'column' : 'row'}
          alignItems={matchesSM ? 'center' : undefined}
        >
          <Grid item className={classes.arrowContainer} style={{ marginRight: '1rem', marginLeft: '-3.5rem' }}>
            <Hidden mdDown>
              <IconButton style={{ backgroundColor: 'transparent' }} component={Link} href='/services'>
                <img src='/assets/backArrow.svg' alt='Back to Services Page' />
              </IconButton>
            </Hidden>
          </Grid>
          <Grid item container direction='column' className={classes.heading}
                style={{ textAlign: matchesMD ? 'center' : undefined }}>
            <Grid item>
              <Typography variant='h2'>
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Whether we're replacing old software or investing new solutions,
                Arc Development is here to help your business tackle technology.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Using regular commercial software leaves you with a lot of stuff
                you don't need, without some of the stuff you do need, and ultimately
                controls the way you work. Without using any software at all you risk
                failing behind competitors and missing out on huge savings from
                increased efficiency.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Our custom solutions are designed from the ground up with your needs
                wants, and goals at the core. This collaborative process produces finely
                tuned software that is much more effective at improving your workflow
                and reducing costs that generalized options.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                We create exactly what you want, exactly how you want it.
              </Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.arrowContainer}>
            <Hidden mdDown>
              <IconButton style={{ backgroundColor: 'transparent' }} component={Link} href='/mobileapps'>
                <img src='/assets/forwardArrow.svg' alt='Forward to iOS/Android App Development' />
              </IconButton>
            </Hidden>
          </Grid>
        </Grid>

        {/*----- Save Energy, Save Time and Save Money -----*/}
        <Grid
          item container
          direction={matchesSM ? 'column' : 'row'}
          justify={matchesSM ? undefined : 'center'}
          alignItems={matchesSM ? 'center' : undefined}
          style={{ marginTop: '15em', marginBottom: '20em' }}
        >
          <Grid item container md direction='column' alignItems='center'
                style={{ maxWidth: '40em', marginBottom: matchesSM ? '10em' : 0 }}>
            <Grid item>
              <Typography variant='h4'>
                Save Energy
              </Typography>
            </Grid>
            <Grid item>
              <img src='/assets/bulb.svg' alt='lightbulb' />
            </Grid>
          </Grid>
          <Grid item container md direction='column' alignItems='center'
                style={{ maxWidth: '40em', marginBottom: matchesSM ? '10em' : 0 }}>
            <Grid item>
              <Typography variant='h4'>
                Save Time
              </Typography>
            </Grid>
            <Grid item>
              <img src='/assets/stopwatch.svg' alt='stopwatch' />
            </Grid>
          </Grid>
          <Grid item container md direction='column' alignItems='center'
                style={{ maxWidth: '40em', marginBottom: matchesSM ? '10em' : 0 }}>
            <Grid item>
              <Typography variant='h4'>
                Save Money
              </Typography>
            </Grid>
            <Grid item>
              <img src='/assets/cash.svg' alt='cash' />
            </Grid>
          </Grid>
        </Grid>

        {/*----- Documents & Data and Scale -----*/}
        <Grid
          item container
          direction={matchesMD ? 'column' : 'row'}
          justify={matchesMD ? undefined : 'space-between'}
          alignItems={matchesMD ? 'center' : undefined}
        >
          <Grid
            item container
            md
            direction={matchesMD ? 'column' : 'row'}
            alignItems={matchesMD ? 'center' : undefined}
            className={classes.itemContainer}
            style={{ marginBottom: '15em', textAlign: matchesMD ? 'center' : undefined }}
          >
            <Grid item container md direction='column'>
              <Grid item>
                <Typography variant='h4'>
                  Documents & Data
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1' paragraph>
                  Reduce Errors. Reduce Waster. Reduce Costs.
                </Typography>
                <Typography variant='body1' paragraph>
                  Billions are spend annually on the purchasing, printing, and
                  distribution of paper. On top of the massive environmental impact
                  it has, it causes harm to your bottom line as well
                </Typography>
                <Typography variant='body1' paragraph>
                  By utilizing digital forms and documents you can remote these
                  obsolete expenses, accelerate your communication,
                  and help the Earth
                </Typography>
              </Grid>
            </Grid>
            <Grid item style={{ minHeight: 275, maxHeight: 275, maxWidth: 275 }} md>
              <Lottie options={documentsOptions} />
            </Grid>
          </Grid>

          <Grid
            item container
            md
            direction={matchesMD ? 'column' : 'row'}
            alignItems={matchesMD ? 'center' : undefined}
            className={classes.itemContainer}
            style={{ textAlign: matchesMD ? 'center' : 'right' }}
          >
            <Grid item md style={{ maxHeight: 260, maxWidth: 280 }}>
              <Lottie options={scaleOptions} />
            </Grid>

            <Grid item container md direction='column'>
              <Grid item>
                <Typography variant='h4'>
                  Scale
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1' paragraph>
                  Whether you’re a large brand, just getting started, or
                  taking off right now, our application architecture
                  ensures pain-free growth and reliability.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/*----- Root-Cause Analysis -----*/}
        <Grid
          item container
          direction='column'
          alignItems='center'
          style={{ marginTop: '20em', marginBottom: '20em' }}
        >
          <Grid item>
            <img
              src='/assets/root.svg'
              alt='three with roots extending out'
              height={matchesSM ? '200em' : '450em'}
              width={matchesSM ? '200em' : '450em'}
            />
          </Grid>
          <Grid item container direction='column' className={classes.itemContainer}>
            <Grid item>
              <Typography variant='h4' align='center'>
                Root-Cause Analysis
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' align='center' paragraph>
                Many problems are merely symptoms of larger, underlying issues.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' align='center' paragraph>
                We can help you thoroughly examine all areas of your business to develop
                a holistic plan for the most effective implementation of technology.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/*----- Automation and User Experience Design -----*/}
        <Grid
          item container
          direction={matchesMD ? 'column' : 'row'}
          justify={matchesMD ? undefined : 'space-between'}
          alignItems={matchesMD ? 'center' : undefined}
        >
          <Grid
            item container
            md
            direction={matchesMD ? 'column' : 'row'}
            alignItems={matchesMD ? 'center' : undefined}
            className={classes.itemContainer}
            style={{ marginBottom: '15em', textAlign: matchesMD ? 'center' : undefined }}
          >
            <Grid item container md direction='column'>
              <Grid item>
                <Typography variant='h4'>
                  Automation
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1' paragraph>
                  Why waste time when you don’t have to?
                </Typography>
                <Typography variant='body1' paragraph>
                  We can help you identify processes with time or event based actions
                  which can now easily be automated.
                </Typography>
                <Typography variant='body1' paragraph>
                  Increasing efficiency increases profits,
                  leaving you more time to focus on your
                  business, not busywork.
                </Typography>
              </Grid>
            </Grid>
            <Grid item style={{ maxHeight: 290, maxWidth: 280 }} md>
              <Lottie options={automationOptions} />
            </Grid>
          </Grid>

          <Grid
            item container
            md
            direction={matchesMD ? 'column' : 'row'}
            alignItems={matchesMD ? 'center' : undefined}
            className={classes.itemContainer}
            style={{ textAlign: matchesMD ? 'center' : 'right' }}
          >
            <Grid item md style={{ maxHeight: 310, maxWidth: 155 }}>
              <Lottie options={uxOptions} />
            </Grid>

            <Grid item container md direction='column'>
              <Grid item>
                <Typography variant='h4'>
                  Scale
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1' paragraph>
                  Whether you’re a large brand, just getting started, or
                  taking off right now, our application architecture
                  ensures pain-free growth and reliability.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*------ Call To Action ------*/}
      <CallToAction />
    </>
  )
}

export default Customsoftware
