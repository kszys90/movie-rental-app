import styled from 'styled-components'

const DefaultStyledMovieContainer = styled.div`
    max-width: 600px;
    height: 195px;
    display: flex;
    padding: 20px;
    margin: 15px auto 15px auto;
    borderRadius: 20px;

    @media (max-width: 600px){
        max-width: 90vw;
        padding: 10px;
        height: 180px;
    }
`

const StyledMovieContainer = styled(DefaultStyledMovieContainer)(({ theme, variant }) => theme.movieContainer[variant])

export default StyledMovieContainer
