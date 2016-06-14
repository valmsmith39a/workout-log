import React from 'react'

import Widget from './widget'
import LikeButton from './likeButton'

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

/*
  Notes:

  JSX spread attributes:
    {...widgets}
    https://facebook.github.io/react/docs/jsx-spread.html
*/

const ListOfWidgets = ({
  widgets
}) => (
  <div>
    <ul>
      {widgets.map(widget => {
        return (
          <div key={widget.id}>
            <Widget
              {...widget}
            />
            <LikeButton
            />
          </div>

        )
      }
      )}
    </ul>
  </div>
)

export default ListOfWidgets
