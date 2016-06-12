
import axios from 'axios'

function fetchWidgetsRequest() {
  return {
    type: 'FETCH_WIDGETS_REQUEST'
  }
}

function fetchWidgetsSuccess(body) {
  return {
    type: 'FETCH_WIDGETS_SUCCESS',
    body
  }
}

function fetchWidgetsFailure(ex) {
  return {
    type: 'FETCH_WIDGETS_FAILURE',
    ex
  }
}

/* own: return a function with a single argument that thunk executes and passes in dispatch which is
   a function that takes an action and returns _dispatch(action).
   We pass in fetchWidgetsRequest() which returns an action, to dispatch function (which doesn't seem to do anything)
   We return a fetch which is a promise
   When the promise resolves, we dispatch a second action with the type and payload
*/

export function getWidgets() {
  return dispatch => {
    dispatch(fetchWidgetsRequest())
    return fetch('/widgets')
      .then(res => res.json())
      .then(json => dispatch(fetchWidgetsSuccess(json)))
      .catch(ex => dispatch(fetchWidgetsFailure(ex)))
  }
}

export function addAWidget(text) {
  return {
    type: 'ADD_A_WIDGET',
    text
  }
}
