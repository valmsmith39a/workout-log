const INITIAL_STATE = []

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_A_WIDGET':
      console.log('in add widget reducer');
      return [...state, action.payload]
    default:
      return state
  }
}
