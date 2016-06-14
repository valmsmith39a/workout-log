const INITIAL_STATE = [
  {
    id:0,
    text:'Default post'
  }
]

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'FETCH_WIDGETS_SUCCESS':
      return action.body
    case 'FETCH_WIDGETS_FAILURE':
      return state
    case 'ADD_A_WIDGET':
      return [...state, action.text]
    default:
      return state
  }
}
