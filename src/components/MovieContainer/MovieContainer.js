import React from 'react'
import StyledMovieContainer from './MovieContainer.styled'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const MovieContainer = props => {
  const variant = useSelector(state => state.variant.variant)
  return (
    <StyledMovieContainer
      variant={variant}
    >{props.children}
    </StyledMovieContainer>
  )
}

MovieContainer.propTypes = {
  children: PropTypes.node,
  setKey: PropTypes.string
}

export default MovieContainer
