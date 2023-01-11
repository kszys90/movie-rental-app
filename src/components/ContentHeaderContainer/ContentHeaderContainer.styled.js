import styled from 'styled-components'

const DefaultStyledContentHeaderContainer = styled.div`
    margin: 20px auto 40px auto;
    padding: 20px;
    width: 70%;
    text-align: center;
    border-radius: 66px;
`

const StyledContentHeaderContainer = styled(DefaultStyledContentHeaderContainer)(({ theme, variant }) => variant ? theme.contentHeaderContainer[variant] : DefaultStyledContentHeaderContainer)

export default StyledContentHeaderContainer
