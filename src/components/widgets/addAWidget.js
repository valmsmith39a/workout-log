import React from 'react'
/*
  Presentational component:
  - Concerned with how things look
  - No Redux actions
  - Don't specify how data is loaded or mutated
  - Receives data and callbacks exclusively through props
  - Often functional components
*/

/*
  Need a input box
  Need a button
*/

const AddAWidget = ({ handleSaveWidget }) => {
  let input;

  return(
    <div>
      <input />
      <button onClick={ handleSaveWidget }>Create</button>
    </div>
  )
}

export default AddAWidget
