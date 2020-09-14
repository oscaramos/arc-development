import React, { useEffect, useState } from 'react'
import useAxios from 'axios-hooks'
import isEmail from 'validator/lib/isEmail'
import isMobilePhone from 'validator/lib/isMobilePhone'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core'

import CallToAction from '../components/CallToAction'

import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'
import airplane from '../assets/send.svg'
import GoldenButton from '../components/GoldenButton'


const useStyles = makeStyles(theme => ({
  button: {
    height: '4rem',
    fontSize: '1.5rem',
    width: '100%'
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
    onSendMessage,
    loading
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
        <GoldenButton
          className={classes.button}
          // disabled={
          //   name.length === 0
          //   || email.length === 0
          //   || phone.length === 0
          //   || message.length === 0
          //   || emailHelper.length !== 0
          //   || phoneHelper.length !== 0
          //   || loading
          // }
          onClick={onSendMessage}
          fullWidth
        >
          {
            loading
              ? <CircularProgress />
              : <>
                  Send Message
                  <img src={airplane} alt='airplane' style={{ width: '1.5rem', marginLeft: '0.5rem' }} />
                </>
          }
        </GoldenButton>
      </Grid>
    </Grid>
  )
}

function Contact() {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [phoneHelper, setPhoneHelper] = useState('')
  const [emailHelper, setEmailHelper] = useState('')

  const [dialogOpen, setDialogOpen] = useState(false)

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

  const [{ data, loading, error }, handleConfirm] = useAxios(
    {
      method: 'get',
      url: 'https://us-central1-arc-development-7dd3f.cloudfunctions.net/sendMail',
      params: {
        name,
        email,
        phone,
        message
      }
    },
    { manual: true }
  )

  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: ''
  })


  useEffect(() => {
    if (data) {
      setDialogOpen(false)
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')

      setAlert({
        open: true,
        message: 'Message sent successfully!',
        backgroundColor: '#4BB543'
      })
    } else if(error) {
      setAlert({
        open: true,
        message: 'Something went wrong, please try again!',
        backgroundColor: '#FF3232'
      })
    }
  }, [data, error])

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
              loading={loading}
            />
          </Grid>
        </Grid>
      </Grid>

      {/*----- Confirmation Dialog -----*/}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth={matchesSM? 'xs': matchesMD ? 'sm' : 'md'}
        style={{ zIndex: 1302 }}
        fullWidth
      >
        <DialogContent style={{ padding: 0 }}>
          <Grid container justify='flex-end' style={{ position: 'absolute', padding: '1em' }}>
            <Grid item>
              <Typography variant='h4' style={{ cursor: 'pointer' }} onClick={() => setDialogOpen(false)}>
                X
              </Typography>
            </Grid>
          </Grid>
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
                handleChange={handleChange} validate={validate}
                onSendMessage={handleConfirm}
                loading={loading}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      {/*----- Call To Action -----*/}
      <Grid item lg>
        <CallToAction />
      </Grid>

      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
    </Grid>
  )
}

export default Contact
