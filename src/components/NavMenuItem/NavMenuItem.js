import React from 'react'
import PropTypes from 'prop-types'
import { NavLink as RouterNavLink } from 'react-router-dom'

export const NavMenuItem = (props) => {
  function handleClick (e) {
    if (!props.to) { return e.preventDefault() }
  }

  const [isHover, setHovered] = React.useState(false)
  const linkStyle =
        ({ isActive }) => ({
          padding: '0',
          color: props.variant === 'light' ? 'black' : 'white',
          fontSize: isHover ? '200%' : '180%',
          transition: '600ms',
          textDecoration: 'inherit',
          fontWeight: isActive ? 900 : 400,
          verticalAlign: 'bottom',
          '& svg': {
            fontSize: isHover ? '200%' : '180%',
            transition: '600ms'
          }
        })

  return (
    <RouterNavLink
      onClick={handleClick}
      to={props.to}
      style={linkStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {props.children}
    </RouterNavLink>

  )
}

NavMenuItem.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  variant: PropTypes.string
}

export default NavMenuItem
