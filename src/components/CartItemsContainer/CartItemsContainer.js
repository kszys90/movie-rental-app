import React from 'react'
import StyledCartItemsContainer from './CartItemsContainer.styled'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const CartItemsContainer = props => {
  const variant = useSelector(state => state.variant.variant)
  return (
    <StyledCartItemsContainer
      variant={variant}
    >{props.children}
    </StyledCartItemsContainer>
  )
}

CartItemsContainer.propTypes = {
  children: PropTypes.node,
  setKey: PropTypes.string
}

export default CartItemsContainer
