import React from 'react'

/*
  Presentational component:
  - Concerned with how things look
  - No Redux actions
  - Don't specify how data is loaded or mutated
  - Receives data and callbacks exclusively through props
  - Often functional components
*/

const Widget = ({
  text,
  onClick
}) => (
  <li
    onClick={onClick}
  >
    {text}
  </li>
)

export default Widget
