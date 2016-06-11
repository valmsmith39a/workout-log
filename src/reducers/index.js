import { combineReducers } from 'redux'
import widgets from './reducer_widgets'

const reducers = combineReducers({
  widgets: widgets
})

export default reducers
