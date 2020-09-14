import React from 'react'
import clsx from 'clsx'

import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

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


function GoldenButton({ className, children, ...props }) {
  const classes = useStyles()
  return (
    <Button
      variant='contained'
      className={clsx(classes.estimateButton, className)}
      {...props}
    >
      { children }
    </Button>
  )
}

export default GoldenButton
