import React from 'react'

import Widget from './widget'

/*
  Presentational component:
  - Concerned with how things look
  - No Redux actions
  - Don't specify how data is loaded or mutated
  - Receives data and callbacks exclusively through props
  - Often functional components
*/

/*
  return a list of widgets
  get an array of widgets
  call widgets component
*/
const ListOfWidgets = ({ widgets }) => (
    <div>
      <ul>
        {widgets.map( widget => {
          return <Widget widget={widget} />
        })}
      </ul>
    </div>
)

export default ListOfWidgets
