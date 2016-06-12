
import axios from 'axios'

// export function getWidgets() {
//   const request = axios.get('/widgets')
//   return {
//     type: 'GET_WIDGETS',
//     payload: request
//   }
// }

function fetchTodosRequest() {
  return {
    type: 'GET_WIDGETS'
  }
}

function fetchTodosSuccess(body) {
  console.log('fetch success: ', body);
  return {
    type: 'GET_WIDGETS_SUCCESS',
    body: body
  }
}

function fetchTodosFailure(ex) {
  return {
    type: 'GET_WIDGETS_FAILURE',
    ex
  }
}

export function getWidgets() {
  console.log('in get Widgets');

  return dispatch => {
    dispatch(fetchTodosRequest())
    return fetch('/widgets')
      .then(res => res.json())
      .then(json => dispatch(fetchTodosSuccess(json)))
      .catch(ex => dispatch(fetchTodosFailure(ex)))
  }


}

export function addAWidget(text) {
  return {
    type: 'ADD_A_WIDGET',
    text
  }
}
