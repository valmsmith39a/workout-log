import expect from 'expect'
import reducer from '../src/reducers/reducer_widgets'

describe('widgets reducer', () => {

  /* testing initial application state */
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([
        'default post'
    ])
  })

  /* testing adding a single widget to empty array and adding a second widget to initial state of array with single string item */
  it('should handle ADD_A_WIDGET', () => {
    expect(
      reducer(
        [],
        {
          type: 'ADD_A_WIDGET',
          text: 'first post'
        }
      )
    ).toEqual(
      [
        'first post'
      ]
    )
  })

  expect(
    reducer(
      [
        'default post'
      ],
      {
        type: 'ADD_A_WIDGET',
        text: 'first post'
      }
    )
  ).toEqual(
    [
      'default post',
      'first post'
    ]
  )
})
