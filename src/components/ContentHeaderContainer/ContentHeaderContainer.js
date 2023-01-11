import React from 'react'
import StyledContentHeaderContainer from './ContentHeaderContainer.styled'
import PropTypes from 'prop-types'

const ContentHeaderContainer = props => {
  return (
    <StyledContentHeaderContainer variant={props.variant}>{props.children}</StyledContentHeaderContainer>
  )
}

ContentHeaderContainer.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string
}

export default ContentHeaderContainer
