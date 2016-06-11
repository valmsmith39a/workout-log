
export function addAWidget(text) {
  console.log('text in add widget action: ', text);
  return {
    type: 'ADD_A_WIDGET',
    text
  }
}
