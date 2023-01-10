/* eslint-disable react/prop-types */
import React from 'react'
import StyledStyledSearchInput from './SearchInput.styled'
import PropTypes from 'prop-types'

const SearchInput = props => {
  const { change, changeState } = props
  return (
    <StyledStyledSearchInput
      variant={props.variant}
      value={props.value}
      onChange={(event) => {
        change(event.target.value)
        changeState()
      }}
    >
      {props.children}
    </StyledStyledSearchInput>
  )
}

SearchInput.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  size: PropTypes.string
}

export default SearchInput
