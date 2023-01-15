import styled from 'styled-components'

const DefaultStyledTopContainer = styled.div`
    padding: 5px;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 600px) {
        padding: 2px;
      }
`
const StyledTopContainer = DefaultStyledTopContainer

export default StyledTopContainer
