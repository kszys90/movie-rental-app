import React from 'react'
import StyledText from './Text.styled'
import PropTypes from 'prop-types'

const Text = props => {
  return (
    <StyledText
      size={props.size}
      custom={props.custom}
      variant={props.variant}
    >
      {props.children}
    </StyledText>
  )
}

Text.propTypes = {
  children: PropTypes.any,
  custom: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string
}

export default Text
