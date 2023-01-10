import styled from 'styled-components'

const DefaultStyledNavBarContainer = styled.div`
    padding: 15px;
    height: 35px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    border-radius: 50px;
`
const StyledNavBarContainer = styled(DefaultStyledNavBarContainer)(({ theme, variant }) => theme.navBarContainer[variant])

export default StyledNavBarContainer
