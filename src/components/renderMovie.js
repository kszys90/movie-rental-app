import React from 'react'
import Button from './Button'
import MovieContainer from './MovieContainer/MovieContainer'
import NavLink from './NavLink'
import Text from './Text'

export const renderMovie = (movie, variant, currentMovies, func, navigate) => {
  const movieImgContainerStyle = {
    flexBasis: '30%'
  }
  const movieContentContainerStyle = {
    flexBasis: '70%'
  }
  function setPrice () {
    if (movie.Year > 2000) { return '1,99' }
    return '0,99'
  }
  const itemPrice = setPrice()
  const filteredMovies = currentMovies && currentMovies.filter((item) => item.imdbID === movie.imdbID)

  function addMovietoCart () {
    const cartItem = {
      Title: movie.Title,
      imdbID: movie.imdbID,
      Year: movie.Year,
      Type: movie.Type,
      Poster: movie.Poster,
      Price: itemPrice,
      isActive: false
    }
    func(cartItem)
  }

  return (
    <MovieContainer key={movie.imdbID}>
      <div style={movieImgContainerStyle}>
        {movie.Poster !== 'N/A' ?
            (
              <img
                src={movie.Poster}
                alt={'move-poster'}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            )
          :
              <div style={{ height: '160px', width: '80%', margin: '0 auto 0 auto', border: '1px solid grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p>Sorry, poster is not available</p>
              </div>
        }

      </div>
      <div style={movieContentContainerStyle}>
        <NavLink
          to={'/search/' + movie.imdbID}
          variant={variant}
          size={'big'}
        >{movie.Title}
        </NavLink>
        <div style={{ padding: '15px', display: 'flex', justifyContent: 'space-around', width: '60%', margin: '0 auto 0 auto' }}>
          <p><Text>Year: {movie.Year}</Text></p>
          <p><Text>Type: {movie.Type}</Text></p>
        </div>
        <div style={{ paddingBottom: '10px' }}>
          <p>
            <Text
              variant={variant}
              custom={'only'}
            >Only:
            </Text>
            <Text
              variant={variant}
              custom={'price'}
            > {itemPrice}$!
            </Text>
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <Button
              variant={variant}
              custom={'buyNow'}
              onClick= {filteredMovies.length > 0 ?
                  () => navigate('/watch')
                :
                addMovietoCart}
            >
              {filteredMovies.length > 0 ? 'Watch now!' : 'Buy now!'}
            </Button>
          </div>
        </div>
        <div style={{ paddingTop: '10px' }}>
          <NavLink
            to={'/search/' + movie.imdbID}
            variant={variant}
            size={'small'}
          >Read more
          </NavLink>
        </div>
      </div>
    </MovieContainer>
  )
}
export default renderMovie
