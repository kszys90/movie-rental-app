import React from 'react'
import StyledTopBarContainer from './TopBarContainer.styled'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
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
      {props.mediaDisplay ?
        props.variant === 'light' ?
          <MdDarkMode onClick={changeVariant} />
          :
          <MdLightMode onClick={changeVariant} />
        :
          (
            <StyledTopBarButton
              onClick={changeVariant}
              variant={props.variant}
            >
              Switch Theme
            </StyledTopBarButton>
          )}
    </StyledTopBarContainer>
  )
}

TopBar.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  mediaDisplay: PropTypes.bool
}

export default TopBar
