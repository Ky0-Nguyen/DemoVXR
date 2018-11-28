import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import routesReducer from './routersReducer'

export default combineReducers({
  data: dataReducer,
  navigate: routesReducer
})
