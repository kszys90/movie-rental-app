import styled from 'styled-components'

const DefaultStyledLogoTitle = styled.h1`
    text-align: center;
    width: 100%;
    font-type: decorative;
    font-size: 5rem;
    font-weight: 900;
`

const StyledLogoTitle = styled(DefaultStyledLogoTitle)(({ theme, variant }) => theme.logo.title[variant])

export default StyledLogoTitle
