const INITIAL_STATE = ['default post']

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_A_WIDGET':
      return [...state, action.text]
    default:
      return state
  }
}
