
export function addAWidget(text) {
  console.log('in add a widget action')
  return {
    type: 'ADD_A_WIDGET',
    text: text
  }
}
