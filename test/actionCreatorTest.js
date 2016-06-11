import expect from 'expect'
import * as actions from '../src/actions/widgets/widgets'

describe('Actions', () => {
  it('should create an ADD_A_WIDGET action', () => {
    const text = 'addWidget'

    const expectedAction = {
      type: 'ADD_A_WIDGET',
      text
    }

    expect(actions.addAWidget(text)).toEqual(expectedAction)
  })
})
