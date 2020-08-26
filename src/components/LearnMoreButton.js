import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonArrow from './ButtonArrow'
import PropTypes from 'prop-types'

function LearnMoreButton({ color, ...rest }) {
  return (
    <Button variant='outlined' style={{ borderColor: color }} {...rest}>
      <span style={{ marginRight: 5, color }}>Learn More</span>
      <ButtonArrow width={10} height={10} fill={color} />
    </Button>
  )
}

LearnMoreButton.propTypes = {
  color: PropTypes.string.isRequired
}

export default LearnMoreButton
