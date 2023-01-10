import { createStore, combineReducers } from 'redux'
import variantReducer from './state/variant'
import userReducer from './state/user'

const rootReducer = combineReducers({
  variant: variantReducer,
  user: userReducer

})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
