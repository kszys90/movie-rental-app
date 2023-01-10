import React from 'react'
import StyledLogoContainer from './LogoContainer.styled'
import StyledLogoTitle from './LogoTitle.styled'
import PropTypes from 'prop-types'

const Logo = props => {
  return (
    <StyledLogoContainer variant={props.variant}>
      <StyledLogoTitle variant={props.variant}>Find & Watch</StyledLogoTitle>
    </StyledLogoContainer>
  )
}

Logo.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string
}

export default Logo
