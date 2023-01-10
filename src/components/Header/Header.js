import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import HeaderContainer from '../HeaderContainer'
import Logo from '../Logo'
import NavBar from '../NavBar/NavBar'
import NavMenuItem from '../NavMenuItem'
import NavShoppingItemAmount from '../NavShoppingItemAmount'
import TopBar from '../TopBar'

export const Header = () => {
  const currentCart = useSelector(state => state.user.cart)
  const variant = useSelector(state => state.variant.variant)
  return (
    <HeaderContainer variant={variant}>
      <TopBar variant={variant} />
      <Logo variant={variant} />
      <NavBar variant={variant}>
        <NavMenuItem
          variant={variant}
          to={'/'}
        >Home
        </NavMenuItem>
        <NavMenuItem
          variant={variant}
          to={'/movies'}
        >Your Movies
        </NavMenuItem>
        <NavMenuItem
          variant={variant}
          to={'/cart'}
        ><FaShoppingCart /><NavShoppingItemAmount value={currentCart.length} />
        </NavMenuItem>
      </NavBar>
    </HeaderContainer>
  )
}
