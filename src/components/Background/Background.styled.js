import styled from 'styled-components'

const DefaultStyledBackground = styled.div`
    width: 100%;
    min-height: calc(100vh - 30px);
    padding-bottom: 30px;
    transition: 500ms;
`

const StyledBackground = styled(DefaultStyledBackground)(({ theme, variant }) => theme.background[variant])

export default StyledBackground
