import React from 'react'
import StyledSearchContainer from './SearchContainer.styled'
import PropTypes from 'prop-types'

const SearchContainer = props => {
  return (
    <StyledSearchContainer variant={props.variant}>{props.children}</StyledSearchContainer>
  )
}

SearchContainer.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string
}

export default SearchContainer
