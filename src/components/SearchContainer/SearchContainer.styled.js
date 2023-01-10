import styled from 'styled-components'

const DefaultStyledSearchContainer = styled.div`
    margin: 20px auto 20px auto;
    padding: 20px;
    width: 60%;
    text-align: center;
    border-radius: 66px;
`

const StyledSearchContainer = styled(DefaultStyledSearchContainer)(({ theme, variant }) => variant ? theme.searchContainer[variant] : DefaultStyledSearchContainer)

export default StyledSearchContainer
