import styled from 'styled-components'

const DefaultStyledMovieContainer = styled.div`
    max-width: 600px;
    height: 180px;
    display: flex;
    padding: 20px;
    margin: 15px auto 15px auto;
    borderRadius: 20px;
`

const StyledMovieContainer = styled(DefaultStyledMovieContainer)(({ theme, variant }) => theme.movieContainer[variant])

export default StyledMovieContainer
