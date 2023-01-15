import styled from 'styled-components'

const DefaultStyledNavBarContainer = styled.div`
    padding: 15px;
    height: 35px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    border-radius: 50px;

    @media (max-width: 600px) {
        padding: 5px;
        width: 90vw;
        margin: 0 auto 0 auto;
      }
`
const StyledNavBarContainer = styled(DefaultStyledNavBarContainer)(({ theme, variant }) => theme.navBarContainer[variant])

export default StyledNavBarContainer
