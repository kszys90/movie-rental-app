export const LOAD = 'user/LOAD'
export const ADD = 'user/ADD'
export const REMOVE = 'user/REMOVE'
export const BUY = 'user/BUY'

export const addToCartAction = (data) => ({
  type: ADD,
  payload: { data }
})
export const removeFromCartAction = (id) => ({
  type: REMOVE,
  payload: { id }
})
export const getItemAction = (data) => ({
  type: BUY,
  payload: { data }
})

const initialState = {
  movies: [{
    Title: 'Star Wars: Episode IV - A New Hope',
    imdbID: 'tt0076759',
    Year: '1977',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg',
    isActive: true
  }],
  cart: [],
  userId: 'tt0076759',
  balance: '100',
  isLocalStorage: false
}

// const initialState = {
//   movies: [],
//   cart: [],
//   userId: '',
//   balance: [],
//   isLocalStorage: 'false'
// }

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state, movies: action.payload.data.movies, userId: action.payload.data.userId, balance: action.payload.data.balance
      }
    case ADD:
      return {
        ...state,
        cart: state.cart.concat(action.payload.data)
      }
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter(({ id }) => id !== action.payload.id)
      }
    case BUY:
      return {
        ...state,
        movies: state.movies.concat(action.payload.data)
      }
    default:
      return state
  }
}

export default reducer
