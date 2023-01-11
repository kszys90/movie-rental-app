import React from 'react'
import Oval from 'react-loading-icons/dist/esm/components/oval'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useAsyncFn } from 'react-use'
import { getMovie } from '../api/getMovie'
import ContentContainer from '../components/ContentContainer'
import ContentHeaderContainer from '../components/ContentHeaderContainer'
import { Header } from '../components/Header/Header'
import PageContainer from '../components/PageContainer'
import Title from '../components/Title'

export const PageMovieInfo = () => {
  const { imdbID } = useParams()
  const [state, doFetch] = useAsyncFn(getMovie)
  const variant = useSelector(state => state.variant.variant)
  const movie = state && state.value

  React.useEffect(() => {
    if (imdbID) {
      doFetch(imdbID)
    }
  }, [doFetch, imdbID])

  return (
    <PageContainer>
      <Header />
      {
            state.loading ?
              <Oval stroke={variant === 'dark' ? '#ffffff' : '#000000'} />
              :
              state.error ?
                <div>Error: {state.error.message}</div>
                :
                  !state.value ?
                    'No data'
                    :
                      (
                        <ContentContainer>
                          <ContentHeaderContainer variant={variant}>
                            <div style={{ marginBottom: '10px' }}><Title size={'huge'}>{movie.Title}</Title ></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                                <div style={{ display: 'flex', marginBottom: '5px' }}>
                                  <div style={{ flexBasis: '30%' }}><p style={{ fontSize: '120%' }}>Released:</p></div>
                                  <div style={{ flexBasis: '70%' }}><p style={{ fontSize: '120%' }}>{movie.Released}</p></div>
                                </div>
                                <div style={{ display: 'flex', marginBottom: '5px' }}>
                                  <div style={{ flexBasis: '30%' }}><p style={{ fontSize: '120%' }}>Country:</p></div>
                                  <div style={{ flexBasis: '70%' }}><p style={{ fontSize: '120%' }}>{movie.Country}</p></div>
                                </div>
                                <div style={{ display: 'flex', marginBottom: '5px' }}>
                                  <div style={{ flexBasis: '30%' }}><p style={{ fontSize: '120%' }}>Language:</p></div>
                                  <div style={{ flexBasis: '70%' }}><p style={{ fontSize: '120%' }}>{movie.Language}</p></div>
                                </div>
                                <div style={{ display: 'flex', marginBottom: '5px' }}>
                                  <div style={{ flexBasis: '30%' }}><p style={{ fontSize: '120%' }}>Genre:</p></div>
                                  <div style={{ flexBasis: '70%' }}><p style={{ fontSize: '120%' }}>{movie.Genre}</p></div>
                                </div>
                                <div style={{ display: 'flex', marginBottom: '5px' }}>
                                  <div style={{ flexBasis: '30%' }}><p style={{ fontSize: '120%' }}>Runtime:</p></div>
                                  <div style={{ flexBasis: '70%' }}><p style={{ fontSize: '120%' }}>{movie.Runtime}</p></div>
                                </div>
                                <div style={{ display: 'flex', marginBottom: '5px' }}>
                                  <div style={{ flexBasis: '30%' }}><p style={{ fontSize: '120%' }}>Director:</p></div>
                                  <div style={{ flexBasis: '70%' }}><p style={{ fontSize: '120%' }}>{movie.Director}</p></div>
                                </div>
                                <div style={{ display: 'flex', marginBottom: '5px' }}>
                                  <div style={{ flexBasis: '30%' }}><p style={{ fontSize: '120%' }}>Actors:</p></div>
                                  <div style={{ flexBasis: '70%' }}><p style={{ fontSize: '120%' }}>{movie.Actors}</p></div>
                                </div>
                                <div style={{ display: 'flex', marginBottom: '5px' }}>
                                  <div style={{ flexBasis: '30%' }}><p style={{ fontSize: '120%' }}>Awards:</p></div>
                                  <div style={{ flexBasis: '70%' }}><p style={{ fontSize: '120%' }}>{movie.Awards}</p></div>
                                </div>
                                <div style={{ display: 'flex', marginBottom: '5px' }}>
                                  <div style={{ flexBasis: '30%' }}><p style={{ fontSize: '120%' }}>BoxOffice:</p></div>
                                  <div style={{ flexBasis: '70%' }}><p style={{ fontSize: '120%' }}>{movie.BoxOffice}</p></div>
                                </div>
                                <div style={{ display: 'flex', marginBottom: '5px' }}>
                                  <div style={{ flexBasis: '30%' }}><p style={{ fontSize: '120%' }}>Rating(imdb):</p></div>
                                  <div style={{ flexBasis: '70%' }}><p style={{ fontSize: '120%' }}>{movie.imdbRating}</p></div>
                                </div>
                                <div style={{ display: 'flex', marginBottom: '5px' }}>
                                  <div style={{ flexBasis: '30%' }}><p style={{ fontSize: '120%' }}>Metascore:</p></div>
                                  <div style={{ flexBasis: '70%' }}><p style={{ fontSize: '120%' }}>{movie.Metascore}</p></div>
                                </div>
                              </div>
                            </div>
                            {movie.Plot === 'N/A' ? null : (<div style={{ margin: '20px auto 10px auto', fontSize: '120%', textAlign: ' justify' }}>{movie.Plot}</div>)}
                          </ContentHeaderContainer>
                        </ContentContainer>
                      )

              }

    </PageContainer>

  )
}
