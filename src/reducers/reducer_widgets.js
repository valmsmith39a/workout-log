// const INITIAL_STATE = [{ text:'default post' }]
const INITIAL_STATE = ['default post']

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_A_WIDGET':
      console.log('in add widget reducer');
      return [...state, action.text]
    default:
      return state
  }
}
