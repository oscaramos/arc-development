import React from 'react'
import Lottie from 'react-lottie'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import animationData from '../../animations/landinganimation/data'
import ButtonArrow from '../ButtonArrow';
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
  animationContainer: {
    maxWidth: '50em',
    minWidth: '20em',
    marginTop: '2em',
    marginLeft: '10%'
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  learnButtonHero: {
    borderColor: theme.palette.common.arcBlue,
    color: theme.palette.common.arcBlue,
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    height: 45,
    width: 145
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down("md")]: {
      marginTop: '3em'
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: '2em'
    }
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  }
}))

const LandingPage = () => {
  const classes = useStyles()

  const theme = useTheme()

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
    </Grid>
  )
}

export default LandingPage
