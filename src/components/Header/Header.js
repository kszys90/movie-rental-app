import React from 'react'
import { FaHome } from 'react-icons/fa'
import { MdVideoLibrary, MdShoppingCart } from 'react-icons/md'
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

  const mediaMatch = window.matchMedia('(max-width: 600px)')
  const [matches, setMatches] = React.useState(mediaMatch.matches)
  mediaMatch.onchange = (e) => {
    setMatches(e.matches)
  }

  return (
    <HeaderContainer variant={variant}>
      <TopBar
        variant={variant}
        mediaDisplay={matches}
      />
      <Logo variant={variant} />
      <NavBar variant={variant}>
        <NavMenuItem
          variant={variant}
          to={'/'}
          mediaDisplay={!matches}
        >Home
        </NavMenuItem>
        <NavMenuItem
          variant={variant}
          to={'/'}
          mediaDisplay={matches}
        ><FaHome />
        </NavMenuItem>
        <NavMenuItem
          variant={variant}
          to={'/movies'}
          mediaDisplay={!matches}
        >Your Movies
        </NavMenuItem>
        <NavMenuItem
          variant={variant}
          to={'/movies'}
          mediaDisplay={matches}
        ><MdVideoLibrary />
        </NavMenuItem>
        <NavMenuItem
          variant={variant}
          to={'/cart'}
        ><MdShoppingCart /><NavShoppingItemAmount value={currentCart.length} />
        </NavMenuItem>
      </NavBar>
    </HeaderContainer>
  )
}
