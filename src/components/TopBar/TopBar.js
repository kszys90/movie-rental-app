import React from 'react'
import StyledTopBarContainer from './TopBarContainer.styled'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { changeVariantAction } from '../../state/variant'
import StyledTopBarButton from './StyledTopBarButton.styled'

const TopBar = props => {
  const dispatch = useDispatch()

  function changeVariant () {
    props.variant === 'light' ?
      dispatch(changeVariantAction('dark'))
      :
      dispatch(changeVariantAction('light'))
  }

  return (
    <StyledTopBarContainer>
      <StyledTopBarButton
        onClick={changeVariant}
        variant={props.variant}
      >
        Switch Theme
      </StyledTopBarButton>
    </StyledTopBarContainer>
  )
}

TopBar.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string
}

export default TopBar
