
import axios from 'axios'

// export function getWidgets() {
//   const request = axios.get('/widgets')
//   return {
//     type: 'GET_WIDGETS',
//     payload: request
//   }
// }

export function getWidgets() {
  console.log('in get Widgets');
  fetch(
    '/widgets',
    { method: 'get' })
  .then(res => {
    return res.text()
  })
  .then(resolvedResponseObject => {
    return JSON.parse(resolvedResponseObject)
  })
}

export function addAWidget(text) {
  return {
    type: 'ADD_A_WIDGET',
    text
  }
}
