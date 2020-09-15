import React from 'react'
import Lottie from 'react-lottie'
import Link from '../src/components/Link'
import Head from 'next/head'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import CallToAction from '../src/components/CallToAction'
import LearnMoreButton from '../src/components/LearnMoreButton'
import GoldenButton from '../src/components/GoldenButton'

import animationData from '../public/animations/landinganimation/data'



const useStyles = makeStyles(theme => ({
  animationContainer: {
    maxWidth: '50em',
    minWidth: '20em',
    marginTop: '2em',
    marginLeft: '10%',
  },
  estimateButton: {
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.arcOrange,
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
  servicesContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(/assets/repeatingBackground.svg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
    },
  },
  informationBackground: {
    backgroundImage: `url(/assets/infoBackground.svg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '-1',
  },
}))

const Landingpage = () => {
  const classes = useStyles()

  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preverseAspectRadio: 'xMidYMid slice',
    },
  }

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Head>
        <title key='title'>Custom Software, Mobile Apps and Websites | Arc Development</title>
        <meta
          name='description'
          key='description'
          content='Pristine software-custom-designed from the ground up with cutting-edge optimizations.
          Use our free estimate calculator to check your project cost'
        />
        <meta
          key='og:title'
          property='og:title'
          content='Bringing West Coast Technology to the Midwest | Arc Development'
        />
        <meta
          key='og:url'
          property='og:url'
          content='myUrl.com/'
        />
        <link rel='canonical' key='canonical' href='myUrl.com/' />
      </Head>
      {/*---- Hero Block -----*/}
      <Grid item>
        <Grid container direction='row' alignItems='center' justify='flex-end'>
          <Grid item sm className={classes.heroTextContainer}>
            <Typography variant='h2' align='center'>
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>

            <Grid container justify='center' style={{ marginTop: '1em' }}>
              <Grid item>
                <GoldenButton component={Link} href='/estimate' className={classes.estimateButton}>
                  Free Estimate
                </GoldenButton>
              </Grid>
              <Grid item>
                <LearnMoreButton
                  variant='contained'
                  color={theme.palette.common.arcBlue}
                  className={classes.learnButtonHero}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm className={classes.animationContainer}>
            <Lottie options={defaultOptions} height='100%' width='100%' />
          </Grid>
        </Grid>
      </Grid>

      {/*----- Custom Software Block ------ */}
      <Grid
        container direction='row'
        className={classes.servicesContainer}
        justify={matchesSM ? 'center' : undefined}
        style={{ textAlign: matchesSM ? 'center' : undefined }}
      >
        <Grid item style={{ marginLeft: matchesSM ? 0 : '5em' }}>
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
            component={Link} href='/customsoftware'
          />
        </Grid>
        <Grid item>
          <img className={classes.icon} alt='custom software icon' src='/assets/Custom Software Icon.svg' />
        </Grid>
      </Grid>

      {/*----- iOS/Android block ------ */}
      <Grid
        container direction='row'
        className={classes.servicesContainer}
        justify={matchesSM ? 'center' : 'flex-end'}
        style={{ textAlign: matchesSM ? 'center' : undefined }}
      >
        <Grid item>
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
            component={Link} href='/mobileapps'
          />
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
          <img className={classes.icon} alt='mobile apps icon' src='/assets/mobileIcon.svg' />
        </Grid>
      </Grid>

      {/*----- Websites Block ------ */}
      <Grid
        container direction='row'
        className={classes.servicesContainer}
        justify={matchesSM ? 'center' : undefined}
        style={{ textAlign: matchesSM ? 'center' : undefined }}
      >
        <Grid item style={{ marginLeft: matchesSM ? 0 : '5em' }}>
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
            component={Link} href='/websites'
          />
        </Grid>
        <Grid item>
          <img className={classes.icon} alt='websites icon' src='/assets/websiteIcon.svg' />
        </Grid>
      </Grid>

      {/*----- Revolution Card -----*/}
      <Grid item>
        <Grid container alignItems='center' justify='center' style={{ height: '100em', marginTop: '10em' }}>
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction='column' alignItems='center'>
                <Grid item>
                  <Typography variant='h3' gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant='subtitle1'>
                    Visionary insights coupled with cutting-edge
                    technology is a recipe for a revolution
                  </Typography>
                </Grid>

                <Grid item>
                  <LearnMoreButton
                    className={classes.learnButton}
                    color={theme.palette.common.arcBlue}
                    component={Link} href='/revolution'
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>

      {/*----- Information Block -----*/}
      <Grid item>
        <Grid container direction={matchesXS ? 'column' : 'row'} alignItems='center'
              style={{ height: '50em', position: 'relative' }}>
          <Grid item xs style={{ paddingLeft: matchesXS ? 0 : '5em' }}>
            <Grid container direction='column'
                  alignItems={matchesXS ? 'center' : 'flex-start'} justify={matchesXS ? 'flex-end' : undefined}
                  style={{ height: '100%' }}
            >
              <Grid item>
                <Typography variant='h4' style={{ color: 'white' }}>
                  About Us
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='subtitle2'>
                  Let's get personal
                </Typography>
              </Grid>
              <Grid item>
                <LearnMoreButton
                  className={classes.learnButton}
                  color='white'
                  component={Link} href='/about'
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs style={{ paddingRight: matchesXS ? 0 : '5em', marginTop: matchesXS ? '4em' : 0 }}>
            <Grid container direction='column' alignItems={matchesXS ? 'center' : 'flex-end'}>
              <Grid item>
                <Typography variant='h4' style={{ color: 'white' }}>
                  Contact Us
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='subtitle2'>
                  Say Hello!
                </Typography>
              </Grid>
              <Grid item>
                <LearnMoreButton
                  className={classes.learnButton}
                  color='white'
                  component={Link} href='/contact'
                />
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.informationBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {/*----- Call To Action Block -----*/}
        <CallToAction />
      </Grid>
    </Grid>
  )
}

export default Landingpage
