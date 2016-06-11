import React from 'react'
import { connect } from 'react-redux'
import {
  addAWidget
} from '../actions/widgets/widgets'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.addAWidget = this.addAWidget.bind(this)
  }

  addAWidget() {
    console.log('add a widget');
    this.props.addAWidget('addWidget')
  }

  renderWidgets() {
    return this.props.widgets.map((widget) => {
      return (
        <li>
          {widget}
        </li>
      )
    })
  }

  render() {
    return(
      <div>
        <p>List of Widgets</p>
        <button onClick={this.addAWidget}>Add a Widget</button>
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
