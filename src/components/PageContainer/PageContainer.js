import React from 'react'
import StyledPageContainer from './PageContainer.styled'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const PageContainer = props => {
  const variant = useSelector(state => state.variant.variant)
  return (
    <StyledPageContainer variant={variant}>{props.children}</StyledPageContainer>
  )
}

PageContainer.propTypes = {
  children: PropTypes.node
}

export default PageContainer
