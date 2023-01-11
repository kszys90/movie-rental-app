import styled from 'styled-components'

const DefaultStyledCartItemsContainer = styled.div`
    max-width: 600px;
    padding: 20px;
    margin: 15px auto 15px auto;
    borderRadius: 20px;
`

const StyledCartItemsContainer = styled(DefaultStyledCartItemsContainer)(({ theme, variant }) => theme.cartItemsContainer[variant])

export default StyledCartItemsContainer
