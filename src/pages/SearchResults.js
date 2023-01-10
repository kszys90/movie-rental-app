import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useAsyncFn } from 'react-use'
import { getMovies as getMoviesAPIRequest } from '../api/getMovies'
import { Oval } from 'react-loading-icons'
import { useDispatch, useSelector } from 'react-redux'
import renderMovie from '../components/renderMovie'
import { addToCartAction } from '../state/user'

export const SearchResults = () => {
  const { searchedPhrase } = useParams()
  const [getMoviesState, getMovies] = useAsyncFn(getMoviesAPIRequest)
  const variant = useSelector(state => state.variant.variant)
  const [sliceResults, setSliceResults] = React.useState('4')
  const dispatch = useDispatch()
  const currentMovies = useSelector(state => state.user.movies)
  const currentCart = useSelector(state => state.user.cart)

  React.useEffect(() => {
    if (searchedPhrase) getMovies(searchedPhrase)
  }, [getMovies, searchedPhrase])

  function addItemToCart (item) {
    const filteredMovies = currentMovies.filter((movie) => movie.imdbID === item.imdbID)
    const filteredCart = currentCart.filter((movie) => movie.imdbID === item.imdbID)
    if (filteredMovies.length === 0 && filteredCart.length === 0) {
      dispatch(addToCartAction(item))
    }
  }
  const navigate = useNavigate()

  function renderPartly () {
    return (
      <>
        {getMoviesState.value.slice(0, Number(sliceResults)).map((movie) => renderMovie(movie, variant, currentMovies, addItemToCart, navigate))}
        {getMoviesState.value.length < sliceResults
          ? null :
          <div>
            <p
              onClick={renderMore}
              style={{
                padding: '40px',
                cursor: 'pointer'
              }}
            >Load more videos
            </p>
          </div>
        }
      </>
    )
  }
  function renderMore () {
    setSliceResults(prevState => Number(prevState) + 5)
  }

  return (
    <>
      <div>
        {
          getMoviesState.error ?
            'Error loading movies'
            :
            getMoviesState.loading ?
              <Oval stroke={variant === 'dark' ? '#ffffff' : '#000000'} />
              :
                !getMoviesState.value ?
                  'There are no results matching your searches. Please check the entered data and try again'
                  :

                  getMoviesState.value.length > 5 ?
                    renderPartly()
                    :
                    getMoviesState.value.map((movie) => renderMovie(movie, variant, currentMovies, addItemToCart, navigate))
                     }
      </div>
    </>
  )
}
