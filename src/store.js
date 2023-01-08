import { createStore, combineReducers } from 'redux'
import variantReducer from './state/variant'

const rootReducer = combineReducers({
  variant: variantReducer

})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
