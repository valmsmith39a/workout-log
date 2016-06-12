
import axios from 'axios'

export function getWidgets() {
  const request = axios.get('/widgets')
  return {
    type: 'GET_WIDGETS',
    payload: request
  }
}

export function addAWidget(text) {
  return {
    type: 'ADD_A_WIDGET',
    text
  }
}
