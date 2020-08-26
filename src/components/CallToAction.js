import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography, useMediaQuery } from '@material-ui/core'

import LearnMoreButton from './LearnMoreButton'

import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: '-1',
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.arcOrange,
    fontSize: '1.5rem'
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
      spacing={matchesSM? 4: 0}
    >
      <Grid item style={{ marginLeft: matchesSM? 0: '5em', textAlign: matchesSM? 'center': undefined }}>
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
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginRight: matchesSM? 0: '5em' }}>
        <Button variant='contained' className={classes.estimateButton}>
          Free Estimate
        </Button>
      </Grid>
      <div className={classes.background} />
    </Grid>
  )
}

export default CallToAction
