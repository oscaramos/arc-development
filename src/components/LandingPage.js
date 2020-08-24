import React from 'react'
import Lottie from 'react-lottie'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import ButtonArrow from './ButtonArrow'
import animationData from '../animations/landinganimation/data'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'
import revolutionBackground from '../assets/repeatingBackground.svg';




const useStyles = makeStyles(theme => ({
  animationContainer: {
    maxWidth: '50em',
    minWidth: '20em',
    marginTop: '2em',
    marginLeft: '10%',
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
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
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down("sm")]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%'
    }
  }
}))

const LandingPage = () => {
  const classes = useStyles()

  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preverseAspectRadio: 'xMidYMid slice',
    },
  }

  return (
    <Grid container direction='column' className={classes.mainContainer} spacing={4}>
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
                <Button className={classes.estimateButton} variant='contained'>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant='contained' className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} />
                </Button>
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
          <Button variant='outlined' className={classes.learnButton}>
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
          </Button>
        </Grid>
        <Grid item>
          <img className={classes.icon} alt='custom software icon' src={customSoftwareIcon} />
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
          <Button variant='outlined' className={classes.learnButton}>
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
          </Button>
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
          <img className={classes.icon} alt='mobile apps icon' src={mobileAppsIcon} />
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
            Website Development
          </Typography>
          <Typography variant='subtitle1' className={classes.subtitle}>
            React More. Discover More. Sell More.
          </Typography>
          <Typography variant='subtitle1'>
            Optimized for Search Engines, built for speed.
          </Typography>
          <Button variant='outlined' className={classes.learnButton}>
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
          </Button>
        </Grid>
        <Grid item>
          <img className={classes.icon} alt='websites icon' src={websitesIcon} />
        </Grid>
      </Grid>

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
                  <Button variant='outlined' className={classes.learnButton}>
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LandingPage
