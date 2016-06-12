const INITIAL_STATE = ['default post']

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'GET_WIDGETS_SUCCESS':
      console.log('get widgets payload: ', action);
      return state
    case 'ADD_A_WIDGET':
      console.log('text in reducer is: ', action.text);
      return [...state, action.text]
    default:
      return state
  }
}
