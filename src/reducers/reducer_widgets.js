const INITIAL_STATE = ['default post']

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'GET_WIDGETS':
      console.log('get widgets payload: ', action.payload);
      return action.payload.data
    case 'ADD_A_WIDGET':
      console.log('text in reducer is: ', action.text);
      return [...state, action.text]
    default:
      return state
  }
}
