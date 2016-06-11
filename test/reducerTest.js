import expect from 'expect'
import reducer from '../src/reducers/reducer_widgets'

describe('widgets reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([
        'default post'
      // {
      //   text: 'default post'
      // }
    ])
  })
})
