import styled from 'styled-components'

const DefaultStyleSearchInput = styled.input`
    padding: 10px;
    border-radius: 20px;
    background: #ececec;
    transition: 1000ms;
    width: 50%;
    &:focus {
        padding-left: 25px;
        padding-right: 25px;
        transition: 1000ms;
    }
    @media (max-width: 600px){
        width: 80%;
        padding: 5px;
        &:focus {
            padding-left: 15px;
            padding-right: 15px;
            transition: 1000ms;
    }
`

const StyledSearchInput = styled(DefaultStyleSearchInput)(({ theme, variant }) => variant ? theme.searchInput.variant[variant] : DefaultStyleSearchInput)

export default StyledSearchInput
