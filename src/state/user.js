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
export const buyItemAction = (data, price) => ({
  type: BUY,
  payload: { data, price }
})

const initialState = {
  movies: [],
  cart: [],
  userId: '',
  balance: '20',
  isLocalStorage: 'false'
}

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
        cart: state.cart.filter(({ imdbID }) => imdbID !== action.payload.id)
      }
    case BUY:
      return {
        ...state,
        movies: state.movies.concat(action.payload.data),
        balance: Number(state.balance) - Number(action.payload.price),
        cart: state.cart.filter(({ imdbID }) => imdbID !== action.payload.data.imdbID)
      }
    default:
      return state
  }
}

export default reducer
