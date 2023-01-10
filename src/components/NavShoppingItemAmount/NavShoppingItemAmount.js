import React from 'react'
import StyledNavShoppingItemAmount from './NavShoppingItemAmount.styled'
import PropTypes from 'prop-types'

const NavShoppingItemAmount = props => {
  return (
    <StyledNavShoppingItemAmount variant={props.variant}>
      {props.value}
    </StyledNavShoppingItemAmount>
  )
}

NavShoppingItemAmount.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  value: PropTypes.number
}

export default NavShoppingItemAmount
