import React from 'react'
import PropTypes from 'prop-types'
import { NavLink as RouterNavLink } from 'react-router-dom'

export const NavLink = (props) => {
  function handleClick (e) {
    if (!props.to) { return e.preventDefault() }
  }

  const [isHover, setHovered] = React.useState(false)
  const linkStyle =
        {
          color: props.variant === 'light' ? 'black' : 'white',
          fontSize: props.size === 'big' ? '140%' : props.size === 'small' ? '80%' : '100%',
          transition: '600ms',
          textDecoration: isHover ? 'underline' : 'inherit'
        }

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

NavLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string
}

export default NavLink
