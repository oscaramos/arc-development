import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({

}))


const CallToAction = () => {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software.<br /> Revolutionary Results.
            </Typography>
            <Typography variant='subtitle2'>
              Take advantage of the 21 Century.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CallToAction
