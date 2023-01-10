import styled from 'styled-components'

const DefaultStyledBackground = styled.div`
    width: 100%;
    min-height: 100vh;
`

const StyledBackground = styled(DefaultStyledBackground)(({ theme, variant }) => theme.background[variant])

export default StyledBackground
