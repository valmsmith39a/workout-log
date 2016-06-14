import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../src/actions/widgets/widgets'
import nock from 'nock'
import expect from 'expect'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_WIDGETS_SUCCESS when fetching widgets has been done', () => {
    nock('http://localhost')
      .get('/widgets')
      .reply(200, { body: { widgets: ['first post'] }})

    const expectedActions = [
      {
        type: 'FETCH_WIDGETS_REQUEST'
      },
      {
        type: 'FETCH_WIDGETS_SUCCESS',
        body: { body: { widgets: ['first post']}}
      }
    ]

    const store = mockStore({ widgets: []})

    return store.dispatch(actions.getWidgets())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
