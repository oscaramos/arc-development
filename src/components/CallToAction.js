import React from 'react'
import Link from './Link'
import ReactGA from 'react-ga'

import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography, useMediaQuery } from '@material-ui/core'

import LearnMoreButton from './LearnMoreButton'
import GoldenButton from './GoldenButton'

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
  },
  background: {
    backgroundImage: `url(/assets/background.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: '-1',
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(/assets/mobileBackground.jpg)`,
      backgroundAttachment: 'inherit',
    }
  }
}))


const CallToAction = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid
      container
      style={{ position: 'relative', height: '60em' }}
      direction={matchesSM? 'column': 'row'}
      alignItems={matchesSM? 'center': 'center'}
      justify={matchesSM? 'center': 'space-between'}
    >
      <Grid item style={{
        marginLeft: matchesSM? 0: '5em',
        textAlign: matchesSM? 'center': undefined,
        marginBottom: matchesSM? "2em": 0
      }}>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software.<br /> Revolutionary Results.
            </Typography>
            <Typography variant='subtitle2' style={{ fontSize: '1.5rem' }}>
              Take advantage of the 21 Century.
            </Typography>
            <LearnMoreButton
              color={theme.palette.common.arcBlue}
              className={classes.learnButton}
              component={Link} href='/services'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginRight: matchesSM? 0: '5em' }}>
        <GoldenButton component={Link} href='/estimate' onClick={() => ReactGA.event({ category: 'User', action: 'Pressed Free Estimate Button on Call To Action window' })} style={{ fontSize: '1.5rem' }}>
          Free Estimate
        </GoldenButton>
      </Grid>
      <div className={classes.background} />
    </Grid>
  )
}

export default CallToAction
