import React from 'react'
/*
  Presentational component:
  - Concerned with how things look
  - No Redux actions
  - Don't specify how data is loaded or mutated
  - Receives data and callbacks exclusively through props
  - Often functional components
*/

const AddAWidget = ({ handleSaveWidget }) => {
  let input

  return(
    <div>
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        handleSaveWidget(input.value)
        input.value = ''
      }}>
        Create
      </button>
    </div>
  )
}

export default AddAWidget
