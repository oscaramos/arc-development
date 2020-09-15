import React from 'react'
import Lottie from 'react-lottie'

import Grid from '@material-ui/core/Grid'
import useTheme from '@material-ui/core/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import CallToAction from '../src/components/CallToAction'

import technologyAnimation from '../public/animations/technologyAnimation/data.json'


const useStyles = makeStyles(theme => ({
  rowContainer: {
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

  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Grid container direction='column'>
      <Grid container direction='column' className={classes.rowContainer}>
        <Grid item>
          <Typography variant='h2' align={matchesMD ? 'center' : undefined} style={{ fontFamily: 'Pacifico' }}>
            The revolution
          </Typography>
        </Grid>

        {/*------ Vision -----*/}
        <Grid container
              direction={matchesMD ? 'column' : 'row'}
              justify='center'
              alignItems='center'
              style={{ marginTop: '5em', marginBottom: '5em' }}
        >
          <Grid item lg>
            <img
              src='/assets/vision.svg'
              alt='mountain through binoculars'
              style={{ width:'100%', maxWidth: '30em', height: 'auto' }}
            />
          </Grid>

          <Grid item lg style={{ marginLeft: matchesMD ? 0 : '5em' }}>
            <Grid
              container
              direction='column'
              justify='flex-end'
              style={{ textAlign: matchesMD? 'center': 'end', maxWidth: '40em', marginLeft: 'auto' }}
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
        <Grid
          container
          direction={matchesMD? 'column': 'row'}
          justify='center'
          alignItems='center'
          style={{ marginBottom: '5em' }}
        >
          <Grid item lg>
            <Grid
              container
              direction='column'
              justify='flex-end'
              style={{ textAlign: matchesMD? 'center': 'start', maxWidth: '40em' }}
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
            <Lottie options={technologyOptions} style={{ maxWidth: '40em' }} />
          </Grid>
        </Grid>
        <Grid item container direction='row' justify='center'>
          <Grid item>
            <Typography variant='h4'>
              Process
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/*----- Consultation ------*/}
      <Grid
        container
        direction={matchesMD? 'column': 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#B3B3B3' }}
      >
        <Grid item lg>
          <Grid
            container
            direction='column'
            alignItems={matchesMD? 'center': undefined}
            style={{ textAlign: matchesMD? 'center': undefined }}
          >
            <Grid item>
              <Typography variant='h4' gutterBottom style={{ color: 'black', marginTop: '2em' }}>
                Consultation
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                Our process begins the moment you realize you need a piece of technology for your business.
                Whether you already have an idea for where to start and what to do, or if you just know
                you want to step things up, our initial consultation will help you examine your business
                holistically to find the best solutions.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                Detailed notes will be taken on your requirements and constraints,
                while taking care to identify other potential areas for consideration.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                Cutting-edge advancements in machine learning like object detection and natural
                language processing allow computers to do things previously unimaginable, and
                our expertise and intuition will help usher you into this new future of possibilities.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src='/assets/consultationIcon.svg'
            alt='handshakes'
            style={{ width: '100%', maxWidth: '30em', height: 'auto' }}
          />
        </Grid>
      </Grid>

      {/*----- Mockup ------*/}
      <Grid
        container
        direction={matchesMD? 'column': 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#FF7373' }}
      >
        <Grid item lg>
          <Grid
            container
            direction='column'
            alignItems={matchesMD? 'center': undefined}
            style={{ textAlign: matchesMD? 'center': undefined }}
          >
            <Grid item>
              <Typography variant='h4' gutterBottom style={{ color: 'black', marginTop: '2em' }}>
                Mockup
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                After we settle on the best path forward and decide on a solution to pursue,
                details like the cost and timeline will be finalized.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                Then it’s time for us to start on your minimum viable product. That’s just a
                fancy term for a mockup, which doesn’t include colors, images, or any other
                polished design elements, but captures the essential layout structure and functionality.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                This helps us understand and refine the solution itself before getting distracted
                by specifics and looks.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src='/assets/mockupIcon.svg'
            alt='monitor'
            style={{ width: '100%', maxWidth: '30em', height: 'auto' }}
          />
        </Grid>
      </Grid>

      {/*----- Review ------*/}
      <Grid
        container
        direction={matchesMD? 'column': 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#39B54A' }}
      >
        <Grid item lg>
          <Grid
            container
            direction='column'
            alignItems={matchesMD? 'center': undefined}
            style={{ textAlign: matchesMD? 'center': undefined }}
          >
            <Grid item>
              <Typography variant='h4' gutterBottom style={{ color: 'black', marginTop: '2em' }}>
                Review
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                Before moving any farther we come back to you with our progress. This gives you the
                freedom to discuss any changes you may want or any ideas you may have come up with before
                any heavy lifting has been done.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                We give you an interactive demonstration of the mockups, thoroughly explaining the thought
                process that went into each screen and every anticipated feature.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                Once you’re completely satisfied with the vision for our solution we get down to the nitty
                gritty, fine-details of design.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src='/assets/reviewIcon.svg'
            alt='magnifying glass'
            style={{ width: '100%', maxWidth: '25em', height: 'auto' }}
          />
        </Grid>
      </Grid>

      {/*----- Design ------*/}
      <Grid
        container
        direction={matchesMD? 'column': 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#A67C52' }}
      >
        <Grid item lg>
          <Grid
            container
            direction='column'
            alignItems={matchesMD? 'center': undefined}
            style={{ textAlign: matchesMD? 'center': undefined }}
          >
            <Grid item>
              <Typography variant='h4' gutterBottom style={{ color: 'black', marginTop: '2em' }}>
                Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                Using the mockups and notes taken during the consultation as guides, we will
                start ironing out what the final product will look like. This also involves using
                any brand material like fonts, colors, and logos to extend the experience
                you’re already familiar with.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                No aspect is superfluous, and care will be taken with every decision.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src='/assets/designIcon.svg'
            alt='design'
            style={{ width: '100%', maxWidth: '40em', height: 'auto' }}
          />
        </Grid>
      </Grid>

      {/*----- Build ------*/}
      <Grid
        container
        direction={matchesMD? 'column': 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#FBB03B' }}
      >
        <Grid item lg>
          <Grid
            container
            direction='column'
            alignItems={matchesMD? 'center': undefined}
            style={{ textAlign: matchesMD? 'center': undefined }}
          >
            <Grid item>
              <Typography variant='h4' gutterBottom style={{ color: 'black', marginTop: '2em' }}>
                Build
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                Here’s where we get down to business.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                Engineering begins after your approval on the final designs. We start by
                scaffolding out the project on a high level, prioritizing some areas over others.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                Each area is then developed in order of importance until ready to be connected to the next piece.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                Typically the backend, behind the scenes operations are completed first. Once all the services
                are in place we can then create the front end, user side of things.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                Finishing the application doesn’t mean we’re done though, because we use extensive testing
                to guarantee compatibility with all intended devices.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                Only after our rigorous examinations will we accept a product as finished, then pushing it
                through the production pipeline. This produces an optimized, compressed, consumer version of
                the code and assets ready for deployment.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src='/assets/buildIcon.svg'
            alt='build'
            style={{ width: '100%', maxWidth: '40em', height: 'auto' }}
          />
        </Grid>
      </Grid>

      {/*----- Launch ------*/}
      <Grid
        container
        direction={matchesMD? 'column': 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#C1272D' }}
      >
        <Grid item lg>
          <Grid
            container
            direction='column'
            alignItems={matchesMD? 'center': undefined}
            style={{ textAlign: matchesMD? 'center': undefined }}
          >
            <Grid item>
              <Typography variant='h4' gutterBottom style={{ color: 'black', marginTop: '2em' }}>
                Launch
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                The moment we’ve all been waiting for.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                When construction comes to a close you’re the first one to know. We’ll give our final
                demonstration to show off your shiny new software in the wild so you know exactly how
                it will look to your users.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                When you say the word, we press the button and launch your project out to the public.
                We’re there to ensure everything goes to plan so you can start reaping the rewards of
                your technological investment immediately.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src='/assets/launchIcon.svg'
            alt='launch'
            style={{ width: '100%', maxWidth: '10em', height: 'auto' }}
          />
        </Grid>
      </Grid>

      {/*----- Maintain ------*/}
      <Grid
        container
        direction={matchesMD? 'column': 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#8E45CE' }}
      >
        <Grid item lg>
          <Grid
            container
            direction='column'
            alignItems={matchesMD? 'center': undefined}
            style={{ textAlign: matchesMD? 'center': undefined }}
          >
            <Grid item>
              <Typography variant='h4' gutterBottom style={{ color: 'black', marginTop: '2em' }}>
                Maintain
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                Our work doesn’t end there.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                After a successful launch we keep in close contact to listen to feedback and hear
                how the project is being received.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                From there on out we make sure your application is kept up to date and taking advantage
                of the best features and practices available. When new developments arise or new
                techniques are discovered in future projects, we will implement those advancements
                in your project as part of our routine maintenance.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src='/assets/maintainIcon.svg'
            alt='maintain'
            style={{ width: '100%', maxWidth: '20em', height: 'auto' }}
          />
        </Grid>
      </Grid>

      {/*----- Iterate ------*/}
      <Grid
        container
        direction={matchesMD? 'column': 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#29ABE2' }}
      >
        <Grid item lg>
          <Grid
            container
            direction='column'
            alignItems={matchesMD? 'center': undefined}
            style={{ textAlign: matchesMD? 'center': undefined }}
          >
            <Grid item>
              <Typography variant='h4' gutterBottom style={{ color: 'black', marginTop: '2em' }}>
                Iterate
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                The cycle repeats whenever you come up with a new idea for extending your current project,
                or come up with a brand new system entirely.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                By planning for future features and changes we can build and evolve your application over time.
                As new use cases and customer needs develop we can respond with continuous integration of new
                content.
              </Typography>
              <Typography variant='body1' paragraph style={{ color: 'white', maxWidth: '20em' }}>
                Our iterative process will keep you current and competitive, allowing you to quickly implement changes
                instead of waiting months for a single update.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src='/assets/iterateIcon.svg'
            alt='domino'
            style={{ width: '100%', maxWidth: '30em', height: 'auto' }}
          />
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  )
}

export default Revolution
