import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

// import App from '../src/components/index' // if want to test connect() wrapper
import { App } from '../src/components/index' // if want to test App component itself without Redux store

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../src/reducers/index'

function setup() {
  let props = {
    addAWidget: expect.createSpy()
  }

  let renderer = TestUtils.createRenderer()
  // if want to test connect() wrapper
  // renderer.render(
  //   <Provider store={createStore(reducers)}>
  //     <App {...props} />
  //   </Provider>
  // )
  renderer.render(
      <App {...props} />
  )

  let output = renderer.getRenderOutput()

  return {
    props,
    renderer,
    output
  }
}

describe('components', () => {
  describe('App', () => {
    // it('should render correctly', () => {
    //   const { output } = setup()
    //   // expect(output.type).toBe('div')
    // })

    it('should call add a widget action creator', () => {
      const { output, props } = setup()

      /* gets the WidgetTextInput component */
      let input = output.props.children[2]

      /*
        calls onSave function in WidgetTextInput component which executes handleSave function in App component
        will only call addAWidget if text.length !== 0
      */

      input.props.onSave('')
      expect(props.addAWidget.calls.length).toBe(0)

      input.props.onSave('first post')
      expect(props.addAWidget.calls.length).toBe(1)
    })
  })
})
