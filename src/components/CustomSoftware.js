import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie'

import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import cash from '../assets/cash.svg'
import stopwatch from '../assets/stopwatch.svg'
import lightbulb from '../assets/bulb.svg'
import roots from '../assets/root.svg'

import documentsAnimation from '../animations/documentsAnimation/data'
import scaleAnimation from '../animations/scaleAnimation/data'
import automationAnimation from '../animations/automationAnimation/data'
import uxAnimation from '../animations/uxAnimation/data'


const useStyles = makeStyles({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  mainContainer: {
    padding: '2em 5em 10em 5em',
  },
  itemContainer: {
    maxWidth: '40em',
  },
})


function CustomSoftware() {
  const classes = useStyles()

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preverseAspectRadio: 'xMidYMid slice',
    },
  }

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preverseAspectRadio: 'xMidYMid slice',
    },
  }

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preverseAspectRadio: 'xMidYMid slice',
    },
  }

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preverseAspectRadio: 'xMidYMid slice',
    },
  }

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      {/*----- Custom Software Development -----*/}
      <Grid item container direction='row'>
        <Grid item className={classes.arrowContainer} style={{ marginRight: '1rem', marginLeft: '-3.5rem' }}>
          <IconButton style={{ backgroundColor: 'transparent' }} component={Link} to='/services'>
            <img src={backArrow} alt='Back to Services Page' />
          </IconButton>
        </Grid>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography variant='h2'>
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Whether we're replacing old software or investing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Using regular commercial software leaves you with a lot of stuff
              you don't need, without some of the stuff you do need, and ultimately
              controls the way you work. Without using any software at all you risk
              failing behind competitors and missing out on huge savings from
              increased efficiency.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Our custom solutions are designed from the ground up with your needs
              wants, and goals at the core. This collaborative process produces finely
              tuned software that is much more effective at improving your workflow
              and reducing costs that generalized options.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              We create exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton style={{ backgroundColor: 'transparent' }} component={Link} to='/mobileapps'>
            <img src={forwardArrow} alt='Forward to iOS/Android App Development' />
          </IconButton>
        </Grid>
      </Grid>

      {/*----- Save Energy, Save Time and Save Money -----*/}
      <Grid item container direction='row' justify='center' style={{ marginTop: '15em', marginBottom: '20em' }}>
        <Grid item container md direction='column' alignItems='center' style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant='h4'>
              Save Energy
            </Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt='lightbulb' />
          </Grid>
        </Grid>
        <Grid item container md direction='column' alignItems='center' style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant='h4'>
              Save Time
            </Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt='stopwatch' />
          </Grid>
        </Grid>
        <Grid item container md direction='column' alignItems='center' style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant='h4'>
              Save Money
            </Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt='cash' />
          </Grid>
        </Grid>
      </Grid>

      {/*----- Documents & Data and Scale -----*/}
      <Grid item container direction='row' justify='space-between'>
        <Grid item container md direction='row' className={classes.itemContainer}>
          <Grid item container md direction='column'>
            <Grid item>
              <Typography variant='h4'>
                Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Reduce Errors. Reduce Waster. Reduce Costs.
              </Typography>
              <Typography variant='body1' paragraph>
                Billions are spend annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental impact
                it has, it causes harm to your bottom line as well
              </Typography>
              <Typography variant='body1' paragraph>
                By utilizing digital forms and documents you can remote these
                obsolete expenses, accelerate your communication,
                and help the Earth
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{ minHeight: 275, maxHeight: 275, maxWidth: 275 }} md>
            <Lottie options={documentsOptions} />
          </Grid>
        </Grid>
        <Grid item container md direction='row' className={classes.itemContainer}>
          <Grid item md style={{ maxHeight: 260, maxWidth: 280 }}>
            <Lottie options={scaleOptions} />
          </Grid>

          <Grid item container md direction='column'>
            <Grid item>
              <Typography variant='h4' align='right'>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph align='right'>
                Whether you’re a large brand, just getting started, or
                taking off right now, our application architecture
                ensures pain-free growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*----- Root-Cause Analysis -----*/}
      <Grid item container direction='column' alignItems='center'
            style={{ marginTop: '20em', marginBottom: '20em'}}
      >
        <Grid item>
          <img src={roots} alt='three with roots extending out' height='450em' width='450em' />
        </Grid>
        <Grid item container direction='column' className={classes.itemContainer}>
          <Grid item>
            <Typography variant='h4' align='center'>
              Root-Cause Analysis
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' align='center' paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' align='center' paragraph>
              We can help you thoroughly examine all areas of your business to develop
              a holistic plan for the most effective implementation of technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/*----- Automation and User Experience Design -----*/}
      <Grid item container direction='row' justify='space-between'>
        <Grid item container md direction='row' className={classes.itemContainer}>
          <Grid item container md direction='column'>
            <Grid item>
              <Typography variant='h4'>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Why waste time when you don’t have to?
              </Typography>
              <Typography variant='body1' paragraph>
                We can help you identify processes with time or event based actions
                which can now easily be automated.
              </Typography>
              <Typography variant='body1' paragraph>
                Increasing efficiency increases profits,
                leaving you more time to focus on your
                business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{ maxHeight: 290, maxWidth: 280 }} md>
            <Lottie options={automationOptions} />
          </Grid>
        </Grid>
        <Grid item container md direction='row' className={classes.itemContainer}>
          <Grid item md style={{ maxHeight: 310, maxWidth: 155 }}>
            <Lottie options={uxOptions} />
          </Grid>

          <Grid item container md direction='column'>
            <Grid item>
              <Typography variant='h4' align='right'>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph align='right'>
                Whether you’re a large brand, just getting started, or
                taking off right now, our application architecture
                ensures pain-free growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CustomSoftware
