import React, { useState } from 'react'
import isEmail from 'validator/lib/isEmail'
import isMobilePhone from 'validator/lib/isMobilePhone'

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
  const [phoneHelper, setPhoneHelper] = useState('')

  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState('')

  const [message, setMessage] = useState('')

  const handleChange = event => {
    switch (event.target.id) {
      case 'name':
        setName(event.target.value)
        break

      case 'phone':
        setPhone(event.target.value)
        break

      case 'email':
        setEmail(event.target.value)
        break

      case 'message':
        setMessage(event.target.value)
        break

      default:
        break
    }
  }

  const validate = event => {
    switch (event.target.id) {
      case 'phone':
        if (!isMobilePhone(event.target.value)) {
          setPhoneHelper('Invalid phone number')
        } else {
          setPhoneHelper('')
        }
        break

      case 'email':
        if (!isEmail(event.target.value)) {
          setEmailHelper('Invalid email')
        } else {
          setEmailHelper('')
        }
        break

      default:
        break
    }
  }


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
          style={{
            maxWidth: matchesMD ? '30em' : '20em',
            padding: matchesXS ? '4em 2em' : matchesMD ? '4em 0' : undefined,
          }}
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
                  <a href='tel:5555555555' style={{ textDecoration: 'none', color: 'inherit' }}>
                    (555) 555-5555
                  </a>
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
                  <a href='mailto:oscar.ramos@ucsp.edu.pe' style={{ textDecoration: 'none', color: 'inherit' }}>
                    oscar.ramos@ucsp.edu.pe
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/*----- Form -----*/}
          <Grid item>
            <TextField
              id='name'
              label='Name'
              value={name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              id='phone'
              label='Phone Number'
              value={phone}
              onChange={handleChange}
              onBlur={validate}
              error={phoneHelper.length > 0}
              helperText={phoneHelper}
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              id='email'
              label='Email'
              value={email}
              onChange={handleChange}
              onBlur={validate}
              error={emailHelper.length > 0}
              helperText={emailHelper}
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              id='message'
              multiline
              fullWidth
              rows={10}
              value={message}
              onChange={handleChange}
              className={classes.message}
              InputProps={{ disableUnderline: true }}
            />
          </Grid>

          <Grid item style={{ alignSelf: 'center', marginTop: '2em' }}>
            <Button
              variant='contained'
              className={classes.button}
              disabled={
                name.length === 0
                || email.length === 0
                || phone.length === 0
                || message.length === 0
                || emailHelper.length !== 0
                || phoneHelper.length !== 0
              }
            >
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
