import React from 'react'
import Lottie from 'react-lottie'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import technologyAnimation from '../animations/technologyAnimation/data.json'

import vision from '../assets/vision.svg'


const useStyles = makeStyles(theme => ({
  mainContainer: {
    padding: '2em 5em 10em 5em',
    [theme.breakpoints.down('sm')]: {
      padding: '1em 2em 10em 2em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0em 2em 10em 2em',
    },
  },
  paragraphContainer: {
    maxWidth: '30em',
  },
}))

function Revolution() {
  const classes = useStyles()

  const technologyOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preverseAspectRadio: 'xMidYMid slice',
    },
  }

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item>
        <Typography variant='h2' style={{ fontFamily: 'Pacifico' }}>
          The revolution
        </Typography>
      </Grid>

      {/*------ Vision -----*/}
      <Grid container direction='row' justify='center'>
        <Grid item lg>
          <img src={vision} alt='mountain through binoculars' width='500' height='500' />
        </Grid>

        <Grid item lg>
          <Grid
            container
            direction='column'
            justify='flex-end'
            style={{ textAlign: 'end' }}
          >
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Vision
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant='body1' paragraph>
                The rise of computers, and subsequently the Internet, has completely altered
                every aspect of human life. This has increased our comfort, broadened our
                connections, and reshaped how we view the world.
              </Typography>
              <Typography variant='body1' paragraph>
                What once was confined to huge rooms and teams of engineers now resides
                in every single one of our hands. Harnessing this unlimited potential by
                using it to solve problems and better lives is at the heart of everything we do.
              </Typography>
              <Typography variant='body1' paragraph>
                We want to help businesses capitalize on the latest and greatest technology.
                The best way to predict the future is to be the one building it,
                and we want to help guide the world into this next chapter of
                technological expansion, exploration, and innovation.
              </Typography>
              <Typography variant='body1' paragraph>
                By holding ourselves to rigorous standards and pristine quality, we
                can ensure you have the absolute best tools necessary to thrive in this new frontier.
              </Typography>
              <Typography variant='body1' paragraph>
                We see a future where every individual has personalized software
                custom tailored to their lifestyle, culture, and interests, helping
                them overcome life’s obstacles. Each project is a step towards that goal.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*------ Technology -----*/}
      <Grid container direction='row' justify='center'>
        <Grid item lg>
          <Grid
            container
            direction='column'
            justify='flex-end'
            style={{ textAlign: 'start' }}
          >
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Technology
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant='body1' paragraph>
                In 2013, Facebook invented a new way of building websites. This new system, React.js,
                completely revolutionizes the process and practice of website development.
              </Typography>
              <Typography variant='body1' paragraph>
                Instead of chaining together long individual pages, like traditional websites,
                React websites are built with little chunks of code called components.
                These components are faster, easier to maintain, and are easily reused and customized,
                each serving a singular purpose.
              </Typography>
              <Typography variant='body1' paragraph>
                Two years later they shocked the world by releasing a similar system, React Native,
                for producing iOS and Android apps. Instead of having to master two completely separate
                development platforms, you can leverage the knowledge you already possessed from
                building websites and reapply it directly! This was a huge leap forward.
              </Typography>
              <Typography variant='body1' paragraph>
                This technology is now being used by companies like AirBnB, Microsoft, Netflix,
                Pinterest, Skype, Tesla, UberEats, and when Facebook purchased Instagram large
                portions of it were even rebuilt using React.
              </Typography>
              <Typography variant='body1' paragraph>
                Developers have since built on top of these systems by automating project setup and
                deployment, allowing creators to focus as much as possible on their work itself.
              </Typography>
              <Typography variant='body1' paragraph>
                These technical advancements translate into savings by significantly reducing
                the workload and streamlining the workflow for developing new pieces of software,
                while also lowering the barrier to entry for mobile app development.
              </Typography>
              <Typography variant='body1' paragraph>
                This puts personalization in your pocket — faster, better, and more affordable than ever before.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg>
          <Lottie options={technologyOptions} style={{ maxWidth: '40em' }}/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Revolution
