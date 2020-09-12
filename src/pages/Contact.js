import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core'

import CallToAction from '../components/CallToAction'

import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'
import airplane from '../assets/send.svg'


const useStyles = makeStyles(theme => ({
  button: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: 50,
    height: '4rem',
    width: '14rem',
    color: 'white',
    fontWeight: 300,
    textTransform: 'none',
    fontSize: '1.5rem',
    border: 0,
  },
  message: {
    border: `2px solid ${theme.palette.common.arcBlue}`,
    marginTop: '5em',
    borderRadius: 5,
  },
}))

function Contact() {
  const classes = useStyles()

  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  return (
    <Grid
      container
      direction={matchesMD ? 'column' : 'row'}
    >
      <Grid item container lg={4} direction='row' justify='center' alignItems='center'>
        <Grid
          item
          container
          direction='column'
          style={{ maxWidth: matchesMD ? '30em' : '20em', padding: matchesXS? '4em 2em': matchesMD? '4em 0': undefined }}
        >
          <Grid item>
            <Typography variant='h2' style={{ lineHeight: 1 }}>
              Contact Us
            </Typography>
            <Typography variant='body1' style={{ color: theme.palette.common.arcBlue }}>
              We're waiting
            </Typography>
          </Grid>

          {/*-- Phone and Email --*/}
          <Grid item style={{ marginTop: '2em' }}>
            <Grid container direction='row' alignItems='flex-end'>
              <Grid item style={{ marginRight: '0.5em' }}>
                <img src={phoneIcon} alt='phone' style={{ height: '1.2em' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' style={{ color: theme.palette.common.arcBlue }}>
                  (555) 555-5555
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ marginBottom: '2em' }}>
            <Grid container direction='row' alignItems='center'>
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

          {/*----- Form -----*/}
          <Grid item>
            <TextField
              label='Name'
              value={name}
              onChange={e => setName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              label='Phone Number'
              value={phone}
              onChange={e => setPhone(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              label='Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              multiline
              fullWidth
              rows={10}
              value={message}
              onChange={e => setMessage(e.target.value)}
              className={classes.message}
              InputProps={{ disableUnderline: true }}
            />
          </Grid>

          <Grid item style={{ alignSelf: 'center', marginTop: '2em' }}>
            <Button variant='outlined' className={classes.button}>
              Send Message
              <img src={airplane} alt='airplane' style={{ width: '1.5rem', marginLeft: '0.5rem' }} />
            </Button>
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
