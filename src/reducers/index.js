import { combineReducers } from 'react-redux'
import widgets from 'reducer_widgets.js'

const reducers = combineReducers({
  widgets: widgets
})

export default reducers
