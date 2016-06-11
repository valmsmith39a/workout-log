import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.addAWidget = this.addAWidget.bind(this)
  }

  addAWidget() {
    console.log('add a widget');
  }

  renderWidgets() {
    return (
      <div>one widget</div>
    )
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

export default connect(null, null)(App)
