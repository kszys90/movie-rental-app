import React from 'react'
import StyledBackground from './Background.styled'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const Background = props => {
  const variant = useSelector(state => state.variant.variant)
  return (
    <StyledBackground variant={variant}>{props.children}</StyledBackground>
  )
}

Background.propTypes = {
  children: PropTypes.node
}

export default Background
