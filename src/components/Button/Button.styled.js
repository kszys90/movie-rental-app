import styled from 'styled-components'

const DefaultStyledButton = styled.button`
  
`

const VariantStyledButton = styled(DefaultStyledButton)(({ theme, variant }) => variant ? theme.button.variant[variant] : DefaultStyledButton)
const StyledButton = styled(VariantStyledButton)(({ theme, custom }) => custom ? theme.button.custom[custom] : VariantStyledButton)

export default StyledButton
