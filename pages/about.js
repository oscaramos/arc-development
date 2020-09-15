import React from 'react'
import Head from 'next/head'

import Grid from '@material-ui/core/Grid'
import useTheme from '@material-ui/core/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import CallToAction from '../src/components/CallToAction'


const useStyles = makeStyles(theme => ({
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}))

function About() {
  const classes = useStyles()

  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <Grid container direction='column'>
      <Head>
        <title key='title'>About Us - History & Team | Arc Development</title>
        <meta
          name='description'
          key='description'
          content='We provide the fastest, most modern, affordable, and aesthetic software design
          and development services in the Midwest. Get a free online estimate now!'
        />
      </Head>
      {/*----- About Us ------*/}
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography variant='h2' gutterBottom align={matchesMD? 'center': undefined}>
          About Us
        </Typography>
      </Grid>
      <Grid item container justify='center' className={classes.rowContainer} style={{ marginTop: '5em', marginBottom: '5em' }}>
        <Typography variant='h4' paragraph className={classes.missionStatement} align='center'>
          Whether it be person to person, business to consumer, or an individual to their interests,
          technology is meant to bring us closer to what we care about in the best way possible.
          Arc Development will use that principle to provide fast, modern, inexpensive,
          and aesthetic software to the Midwest and beyond.
        </Typography>
      </Grid>

      {/*----- History -----*/}
      <Grid
        container
        direction={matchesMD? 'column': 'row'}
        justify={matchesMD? undefined: 'space-around'}
        className={classes.rowContainer}
        style={{ marginBottom: '20em' }}
      >
        <Grid item>
          <Grid container direction='column' alignItems={matchesMD? 'center': undefined} style={{ textAlign: matchesMD? 'center': undefined }}>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                History
              </Typography>
            </Grid>
            <Grid item style={{ maxWidth: '40em' }}>
              <Typography variant='body1' paragraph style={{ fontWeight: 700, fontStyle: 'italic' }}>
                We’re the new kid on the block.
              </Typography>
              <Typography variant='body1' paragraph>
                Founded in 2019, we’re ready to get our hands on the world’s business problems.
              </Typography>
              <Typography variant='body1' paragraph>
                It all started with one question: Why aren’t all businesses using available technology?
                There are many different answers to that question: economic barriers, social barriers,
                educational barriers, and sometimes institutional barriers.
              </Typography>
              <Typography variant='body1' paragraph>
                We aim to be a powerful force in overcoming these obstacles. Recent developments in software
                engineering and computing power, compounded by the proliferation of smart phones, has opened
                up infinite worlds of possibility. Things that have always been done by hand can now be done
                digitally and automatically, and completely new methods of interaction are created daily.
                Taking full advantage of these advancements is the name of the game.
              </Typography>
              <Typography variant='body1' paragraph>
                All this change can be a lot to keep up with, and that’s where we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify='center' alignItems='center' style={{ height: '100%' }}>
            <Grid item>
              <img src='/assets/history.svg' alt='book with quill pen' style={{ width: '100%', maxWidth: matchesLG? '20em': '40em' }}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*----- Free Estimate -----*/}
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  )
}

export default About
