import React from 'react'
import StyledHeaderContainer from './HeaderContainer.styled'
import PropTypes from 'prop-types'

const HeaderContainer = props => {
  return (
    <StyledHeaderContainer variant={props.variant}>{props.children}</StyledHeaderContainer>
  )
}

HeaderContainer.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string
}

export default HeaderContainer
