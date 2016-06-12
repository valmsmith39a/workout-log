const INITIAL_STATE = ['default post']

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'FETCH_WIDGETS_SUCCESS':
      console.log('get widgets payload: ', action);
      return action.body
    case 'FETCH_WIDGETS_FAILURE':
      return state
    case 'ADD_A_WIDGET':
      return [...state, action.text]
    default:
      return state
  }
}
