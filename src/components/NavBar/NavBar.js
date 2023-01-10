import React from 'react'
import StyledNavBarContainer from './NavBarContainer.styled'
import PropTypes from 'prop-types'

const NavBar = props => {
  return (
    <StyledNavBarContainer variant={props.variant}>
      {props.children}
    </StyledNavBarContainer>
  )
}

NavBar.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string
}

export default NavBar
