import React from 'react'
import StyledTitle from './Title.styled'
import PropTypes from 'prop-types'

const Title = props => {
  return (
    <StyledTitle
      size={props.size}
      variant={props.variant}
    >
      {props.children}
    </StyledTitle>
  )
}

Title.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  size: PropTypes.string
}

export default Title
