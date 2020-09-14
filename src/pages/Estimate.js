import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import check from '../assets/check.svg'
import send from '../assets/send.svg'
import software from '../assets/software.svg'
import mobile from '../assets/mobile.svg'
import website from '../assets/website.svg'
import backArrow from '../assets/backArrow.svg'
import backArrowDisabled from '../assets/backArrowDisabled.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import forwardArrowDisabled from '../assets/forwardArrowDisabled.svg'
import camera from '../assets/camera.svg'
import upload from '../assets/upload.svg'
import person from '../assets/person.svg'
import persons from '../assets/persons.svg'
import info from '../assets/info.svg'
import bell from '../assets/bell.svg'
import people from '../assets/people.svg'
import usersIcon from '../assets/users.svg'
import iPhone from '../assets/iphone.svg'
import gps from '../assets/gps.svg'
import customized from '../assets/customized.svg'
import data from '../assets/data.svg'
import android from '../assets/android.svg'
import globe from '../assets/globe.svg'
import biometrics from '../assets/biometrics.svg'

import estimateAnimation from '../animations/estimateAnimation/data.json'
import { Typography } from '@material-ui/core'
import animationData from '../animations/landinganimation/data'
import Lottie from 'react-lottie'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
  mainContainer: {},
}))

function Estimate() {
  const classes = useStyles()

  const estimateOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preverseAspectRadio: 'xMidYMid slice',
    },
  }

  return (
    <Grid container direction='row' className={classes.mainContainer}>
      {/*----- Estimate ------*/}
      <Grid item container lg={6} direction='column'>
        <Grid item>
          <Typography variant='h2' align='center'>
            Estimate
          </Typography>
        </Grid>
        <Grid item>
          <Lottie options={estimateOptions} height='100%' width='100%' />
        </Grid>
      </Grid>

      {/*----- Question ------*/}
      <Grid item container lg={6} direction='column'>
        <Grid item>
          <Typography variant='h4' align='center'>
            Which service are you interested in?
          </Typography>
        </Grid>
        <Grid item container direction='row'>
          <Grid item container lg={4} direction='column' alignItems='center'>
            <Grid item style={{ maxWidth: '12em' }}>
              <Typography variant='h6' align='center'>
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <img src={software} alt='three floating screens' style={{ width: '10em', height: '10em' }} />
            </Grid>
          </Grid>
          <Grid item container lg={4} direction='column' alignItems='center'>
            <Grid item style={{ maxWidth: '12em' }}>
              <Typography variant='h6' align='center'>
                iOS App Development
              </Typography>
            </Grid>
            <Grid item>
              <img src={mobile} alt='three floating screens' style={{ width: '10em', height: '10em' }} />
            </Grid>
          </Grid>
          <Grid item container lg={4} direction='column' alignItems='center'>
            <Grid item style={{ maxWidth: '12em' }}>
              <Typography variant='h6' align='center'>
                Website development
              </Typography>
            </Grid>
            <Grid item>
              <img src={website} alt='three floating screens' style={{ width: '10em', height: '10em' }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction='row' justify='space-around'>
          <Grid item>
            <IconButton>
              <img src={backArrow} alt='back arrow' />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <img src={forwardArrow} alt='forward arrow' />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Estimate
