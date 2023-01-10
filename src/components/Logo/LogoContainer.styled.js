import styled from 'styled-components'

const DefaultStyledLogoContainer = styled.div`
    margin: 0;
    padding-bottom: 20px;
    text-align: center;
`

// const StyledLogoContainer = styled(DefaultStyledLogoContainer)(({ theme, variant }) => theme.Logo[variant])
const StyledLogoContainer = DefaultStyledLogoContainer

export default StyledLogoContainer
