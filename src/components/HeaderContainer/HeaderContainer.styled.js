import styled from 'styled-components'

const DefaultStyledHeaderContainer = styled.div`
    margin: 0;
    padding: 0;
    padding-bottom: 10px;
    width: 100%;
    max-width: 1200px;
    text-align: center;
    position: absolute;
    position: sticky;
    top: 0.001px;

`

const StyledHeaderContainer = styled(DefaultStyledHeaderContainer)(({ theme, variant }) => theme.headerContainer[variant])

export default StyledHeaderContainer
