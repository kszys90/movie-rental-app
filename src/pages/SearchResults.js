import React from 'react'
import { useParams } from 'react-router'
import { useAsyncFn } from 'react-use'
import { getMovies as getMoviesAPIRequest } from '../api/getMovies'

export const SearchResults = () => {
  const { searchedPhrase } = useParams()
  const [getMoviesState, getMovies] = useAsyncFn(getMoviesAPIRequest)

  React.useEffect(() => {
    if (searchedPhrase) getMovies(searchedPhrase)
  }, [getMovies, searchedPhrase])

  return (
    <>
      <div>
        {
          getMoviesState.error ?
            'Error loading movies'
            :
            getMoviesState.loading ?
              'Loading movies...'
              :
                !getMoviesState.value ?
                  'No data'
                  :
                  <div>
                    {
                      getMoviesState.value.map((movie) => {
                        return (
                          <p
                            key={movie.imdbID}
                            to={'/movies/' + movie.imdbID}
                          >
                            {movie.Year} | {movie.Title}
                          </p>
                        )
                      })
                    }
                  </div>
        }
      </div>
    </>
  )
}
