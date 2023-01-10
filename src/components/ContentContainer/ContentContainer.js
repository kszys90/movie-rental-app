import React from 'react'
import StyledContentContainer from './ContentContainer.styled'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const ContentContainer = props => {
  const variant = useSelector(state => state.variant.variant)
  return (
    <StyledContentContainer variant={variant}>{props.children}</StyledContentContainer>
  )
}

ContentContainer.propTypes = {
  children: PropTypes.node
}

export default ContentContainer
