import styled from 'styled-components'

const DefaultStyledTopBarButton = styled.button`
    padding: 10px 30px;
    border: solid #dbdfe3 0px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border-radius: 50px;
    transition : 1000ms;
    transform: translateY(0);
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    text-transform: lowercase;
        &:hover {
            transition : 1000ms;
            padding: 10px 50px;
            transform : translateY(-0px);
}
`
const StyledTopBarButton = styled(DefaultStyledTopBarButton)(({ theme, variant }) => theme.topBarButton[variant])

export default StyledTopBarButton
