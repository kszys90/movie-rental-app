import React from 'react'
import Title from './Title'

export const renderMovieInfo = (movie, mediaMobileMatch) => {
  const elements = [
    { name: 'Released', value: movie.Released },
    { name: 'Country', value: movie.Country },
    { name: 'Language', value: movie.Language },
    { name: 'Genre', value: movie.Genre },
    { name: 'Runtime', value: movie.Runtime },
    { name: 'Director', value: movie.Director },
    { name: 'Actors', value: movie.Actors },
    { name: 'Awards', value: movie.Awards },
    { name: 'BoxOffice', value: movie.BoxOffice },
    { name: 'Rating(imdb)', value: movie.imdbRating },
    { name: 'Metascore', value: movie.Metascore }
  ]
  function renderAtMediaMobile () {
    return (
      <>
        <div style={{ marginBottom: '10px' }}><Title size={'big'}>{movie.Title}</Title ></div>
        <div style={{ height: '250px', marginBottom: '20px' }}>
          {
              movie.Poster !== 'N/A' ?
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
        {elements.map(element => {
          return (
            <div
              key={`${element.name}-id`}
              style={{ display: 'flex', marginBottom: '5px', textAlign: 'left', marginLeft: '20px' }}
            >
              <div style={{ flexBasis: '40%' }}><p style={{ fontSize: '90%' }}>{element.name}:</p></div>
              <div style={{ flexBasis: '60%' }}><p style={{ fontSize: '90%' }}>{element.value}</p></div>
            </div>
          )
        })}
        { movie.Plot === 'N/A' ? null : (<div style={{ margin: '20px auto 10px auto', fontSize: '90%', textAlign: ' justify' }}>{movie.Plot}</div>) }
      </>
    )
  }
  function renderAtMediaDesktop () {
    return (

      <>
        <div style={{ marginBottom: '10px' }}><Title size={'huge'}>{movie.Title}</Title ></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '315px' }}>
          <div style={{ flexBasis: '30%' }}>
            {
              movie.Poster !== 'N/A' ?
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
          <div style={{ flexBasis: '60%', textAlign: 'left', marginRight: '20px' }}>
            {elements.map(element => {
              return (
                <div
                  key={`${element.name}-id`}
                  style={{ display: 'flex', marginBottom: '5px' }}
                >
                  <div style={{ flexBasis: '30%' }}><p style={{ fontSize: '120%' }}>{element.name}:</p></div>
                  <div style={{ flexBasis: '70%' }}><p style={{ fontSize: '120%' }}>{element.value}</p></div>
                </div>
              )
            })}
          </div>
        </div>
        {movie.Plot === 'N/A' ? null : (<div style={{ margin: '20px auto 10px auto', fontSize: '120%', textAlign: ' justify' }}>{movie.Plot}</div>)}
      </>
    )
  }
  return mediaMobileMatch ? renderAtMediaMobile() : renderAtMediaDesktop()
}
