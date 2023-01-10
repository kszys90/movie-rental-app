import React from 'react'
import StyledButton from './Button.styled'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
      variant={props.variant}
      custom={props.custom}
    >
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.any,
  variant: PropTypes.string,
  custom: PropTypes.string
}

export default Button
