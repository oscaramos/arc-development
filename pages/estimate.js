import React from 'react'
import Lottie from 'react-lottie'
import Head from 'next/head'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import useTheme from '@material-ui/core/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'

import GoldenButton from '../src/components/GoldenButton'

import estimateAnimation from '../public/animations/estimateAnimation/data.json'


const useStyles = makeStyles(() => ({
  mainContainer: {
    padding: '2em',
    marginTop: '5em',
    marginBottom: '5em'
  },
}))

function Estimate() {
  const classes = useStyles()

  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

  const questions = [
    {
      id: 1,
      title: 'Which service are you interested in?',
      options: [
        {
          id: 1,
          title: 'Custom Software Development',
          image: '/assets/software.svg',
          imageAlt: 'three floating screens outline',
        },
        {
          id: 2,
          title: 'iOS App Development',
          image: '/assets/mobile.svg',
          imageAlt: 'two phones and a tablet outline',
        },
        {
          id: 3,
          title: 'Website development',
          image: '/assets/website.svg',
          imageAlt: 'computer screen outline',
        },
      ],
    },
  ]


  const estimateOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preverseAspectRadio: 'xMidYMid slice',
    },
  }

  return (
    <Grid
      container
      direction={matchesMD? 'column': 'row'}
      className={classes.mainContainer}
    >
      <Head>
        <title key='title'>Free Custom Software Estimate | Arc Development</title>
      </Head>
      {/*----- Estimate ------*/}
      <Grid item container lg direction='column' alignItems='center'>
        <Grid item>
          <Typography variant='h2' align='center'>
            Estimate
          </Typography>
        </Grid>
        <Grid item style={{ maxWidth: '40em', height: '40em' }}>
          <Lottie options={estimateOptions} height='100%' width='100%' />
        </Grid>
      </Grid>

      {/*----- Questions ------*/}
      <Grid item container lg direction='column'>
        {
          questions.map(question => (
            <Grid item container key={question.id} direction='column'>
              {/*-- Title --*/}
              <Grid item>
                <Typography variant='h4' align='center' gutterBottom>
                  {question.title}
                </Typography>
              </Grid>

              {/*-- Questions options --*/}
              <Grid item container direction={matchesMD? 'column' :'row'} style={{ marginTop: '2.5em', marginBottom: '2.5em' }}>
                {
                  question.options.map(option => (
                    <Grid key={option.id} item container lg={4} direction='column' alignItems='center'>
                      <Grid item style={{ maxWidth: '12em' }}>
                        <Typography variant='h6' align='center'>
                          {option.title}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <img
                          src={option.image}
                          alt={option.imageAlt}
                          style={{ width: '10em', height: '10em' }}
                        />
                      </Grid>
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
          ))
        }

        {/*----- Navigation ------*/}
        <Grid container direction='row' justify='space-around'>
          <Grid item>
            <IconButton>
              <img src='/assets/backArrow.svg' alt='back arrow' />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <img src='/assets/forwardArrow.svg' alt='forward arrow' />
            </IconButton>
          </Grid>
        </Grid>

        {/*----- Get estimate ------*/}
        <Grid container justify='center' style={{ marginTop: '2.5em' }}>
          <Grid item>
            <GoldenButton style={{ fontSize: '1.2rem', height: '3em' }}>
              Get Estimate
            </GoldenButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Estimate
