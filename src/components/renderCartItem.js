import React from 'react'
import NavLink from './NavLink'
import Button from './Button'

export const renderCartItem = (movie, variant, removeClick, mediaMatches) => {
  const movieInfoStyle = {
    textAlign: 'left', fontSize: mediaMatches ? '80%' : '100%', padding: '5px'
  }
  return (
    <div
      key={movie.imdbID}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        boxShadow: variant === 'light' ?
          ` 5px 5px 10px #989898,
          -5px -5px 10px #f8f8f8`
          :
                   `  5px 5px 6px #181818,
                    -5px -5px 6px #262626`
      }}
    >
      <div style={{ flexBasis: '85%', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'left' }}>
          <NavLink
            variant={variant}
            size={mediaMatches ? 'medium' : 'big'}
            to={`/${movie.imdbID}`}
          >{movie.Title}
          </NavLink>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p style={movieInfoStyle}>Type: {movie.Type}</p>
          <p style={movieInfoStyle}>Price: {movie.Price} $</p>
        </div>
      </div>
      <div style={{ flexBasis: '15%', display: 'flex', flexDirection: 'row', justifyContent: 'right', alignItems: 'center', marginRight: '10px' }}>
        <Button
          variant={variant}
          custom={'remove'}
          onClick={() => removeClick(movie.imdbID)}
        >X
        </Button>
      </div>
    </div>
  )
}
export default renderCartItem
