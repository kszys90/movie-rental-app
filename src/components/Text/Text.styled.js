import styled from 'styled-components'

const DefaultStyleText = styled.span`
    text-align: center;
    font-size: 100%;
`

const StyledTextSize = styled(DefaultStyleText)(({ size, theme }) => size ? theme.text.size[size] : DefaultStyleText)
const StyledText = styled(StyledTextSize)(({ theme, custom, variant }) => custom && variant ? theme.text.custom[custom][variant] : StyledTextSize)

export default StyledText
