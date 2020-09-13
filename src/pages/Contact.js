import React, { useState } from 'react'
import isEmail from 'validator/lib/isEmail'
import isMobilePhone from 'validator/lib/isMobilePhone'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
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

function ContactUsFormulary(props) {
  const {
    name, phone, email, message,
    phoneHelper, emailHelper,
    handleChange, validate,
    onSendMessage
  } = props

  const classes = useStyles()

  return (
    <Grid item container direction='column'>
      <Grid item>
        <TextField
          label='Name'
          value={name}
          onChange={e => handleChange('name', e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          label='Phone Number'
          value={phone}
          onChange={e => handleChange('phone', e.target.value)}
          onBlur={e => validate('phone', e.target.value)}
          error={phoneHelper.length > 0}
          helperText={phoneHelper}
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          label='Email'
          value={email}
          onChange={e => handleChange('email', e.target.value)}
          onBlur={e => validate('email', e.target.value)}
          error={emailHelper.length > 0}
          helperText={emailHelper}
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          multiline
          fullWidth
          rows={10}
          value={message}
          onChange={e => handleChange('message', e.target.value)}
          className={classes.message}
          InputProps={{ disableUnderline: true }}
        />
      </Grid>

      <Grid item style={{ alignSelf: 'center', marginTop: '2em', width: '100%' }}>
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
          onClick={onSendMessage}
          fullWidth
        >
          Send Message
          <img src={airplane} alt='airplane' style={{ width: '1.5rem', marginLeft: '0.5rem' }} />
        </Button>
      </Grid>
    </Grid>
  )
}

function Contact() {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  const [name, setName] = useState('oscaramos')

  const [phone, setPhone] = useState('921492405')
  const [phoneHelper, setPhoneHelper] = useState('')

  const [email, setEmail] = useState('oscar.ramos@ucsp.edu.pe')
  const [emailHelper, setEmailHelper] = useState('')

  const [message, setMessage] = useState('message')

  const [dialogOpen, setDialogOpen] = useState(true)

  const handleChange = (id, value) => {
    switch (id) {
      case 'name':
        setName(value)
        break

      case 'phone':
        setPhone(value)
        break

      case 'email':
        setEmail(value)
        break

      case 'message':
        setMessage(value)
        break

      default:
        break
    }
  }

  const validate = (id, value) => {
    switch (id) {
      case 'phone':
        if (!isMobilePhone(value)) {
          setPhoneHelper('Invalid phone number')
        } else {
          setPhoneHelper('')
        }
        break

      case 'email':
        if (!isEmail(value)) {
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
      <Grid item container lg={4} xl={3} direction='row' justify='center' alignItems='center'>
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

          <Grid item>
            <ContactUsFormulary
              name={name} phone={phone} email={email} message={message}
              phoneHelper={phoneHelper} emailHelper={emailHelper}
              handleChange={handleChange} validate={validate}
              onSendMessage={() => setDialogOpen(true)}
            />
          </Grid>
        </Grid>
      </Grid>

      {/*----- Confirmation Dialog -----*/}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth={matchesSM? 'xs': matchesMD ? 'sm' : 'md'}
        fullWidth
        style={{ zIndex: 1302 }}
      >
        <DialogContent>
          <Grid container direction='column' style={{ padding: matchesSM? '1em 1em' : matchesSM? '1em 3em': matchesMD ? '2em 5em' : '2em 16em' }}>
            <Grid item style={{ marginBottom: '1em' }}>
              <Typography variant='h2' align='center'>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item>
              <ContactUsFormulary
                name={name} phone={phone} email={email} message={message}
                phoneHelper={phoneHelper} emailHelper={emailHelper}
                handleChange={handleChange}
                validate={validate}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      {/*----- Call To Action -----*/}
      <Grid item lg>
        <CallToAction />
      </Grid>
    </Grid>
  )
}

export default Contact
