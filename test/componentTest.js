import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

import App from '../src/components/index'

function setup() {
  let props = {
    addAWidget: expect.createSpy()
  }

  let renderer = TestUtils.createRenderer()
  renderer.render(<App {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    renderer,
    output
  }
}

describe('components', () => {
  describe('App', () => {
    it('should render correctly', () => {
      const { output } = setup()

      expect(output.type).toBe('div')
    })
  })
})
