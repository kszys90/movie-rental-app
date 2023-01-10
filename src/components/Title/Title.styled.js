import styled from 'styled-components'

const DefaultStyleTitle = styled.p`
    text-align: center;
    font-size: 130%;
    padding: 10px;
`

const StyledTitleSize = styled(DefaultStyleTitle)(({ size, theme }) => size ? theme.title.size[size] : DefaultStyleTitle)
const StyledTitle = styled(StyledTitleSize)(({ theme, variant }) => variant ? theme.title.variant[variant] : StyledTitleSize)

export default StyledTitle
