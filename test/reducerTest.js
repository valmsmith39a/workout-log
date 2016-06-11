import expect from 'expect'
import reducer from '../src/reducers/reducer_widgets'

describe('widgets reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([
        'default post'
    ])
  })

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
})
