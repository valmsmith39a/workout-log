import React from 'react'
import { connect } from 'react-redux'
import {
  addAWidget
} from '../actions/widgets/widgets'

import Widget from './widgets/widget'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.addAWidget = this.addAWidget.bind(this)
  }

  addAWidget() {
    this.props.addAWidget('addWidget')
  }

  renderWidgets() {
    return this.props.widgets.map((widget, index) => {
      return (
        <Widget key={index} widget={widget} />
      )
    })
  }

  render() {
    return(
      <div>
        <p>List of Widgets</p>
        <button id='add-btn' onClick={this.addAWidget}>Add a Widget</button>
        <br />
        {this.renderWidgets()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { addAWidget })(App)
