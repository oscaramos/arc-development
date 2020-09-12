import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CallToAction from '../components/CallToAction'
import { Typography, useTheme } from '@material-ui/core'
import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'


const useStyles = makeStyles(() => ({
  mainContainer: {},
}))

function Contact() {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Grid container direction='row'>
      <Grid item lg={4}>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2' style={{ lineHeight: 1 }}>
              Contact Us
            </Typography>
            <Typography variant='body1' style={{ color: theme.palette.common.arcBlue }}>
              We're waiting
            </Typography>
          </Grid>

          {/*-- Phone and Email --*/}
          <Grid item container direction='row' alignItems='flex-end'>
            <Grid item style={{ marginRight: '0.5em' }}>
              <img src={phoneIcon} alt='phone' style={{ height: '1.2em' }} />
            </Grid>
            <Grid item>
              <Typography variant='body1' style={{ color: theme.palette.common.arcBlue }}>
                (555) 555-5555
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction='row' alignItems='center'>
            <Grid item style={{ marginRight: '0.5em' }}>
              <img src={emailIcon} alt='email' style={{ height: '1em' }} />
            </Grid>
            <Grid item>
              <Typography variant='body1' style={{ color: theme.palette.common.arcBlue }}>
                oscar.ramos@ucsp.edu.pe
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg>
        <CallToAction />
      </Grid>
    </Grid>
  )
}

export default Contact
