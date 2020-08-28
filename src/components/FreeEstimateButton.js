import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: 50,
    height: 80,
    width: 205,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  }
}))


const FreeEstimateButton = ({ className, ...props }) => {
  const classes = useStyles()
  return (
    <Button
      component={Link}
      to='/estimate'
      variant='contained'
      className={clsx(classes.estimateButton, className)}
      {...props}
    >
      Free Estimate
    </Button>
  )
}



export default FreeEstimateButton
