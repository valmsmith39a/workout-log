import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
  renderWidgets() {
    return (
      <div>one widget</div>
    )
  }
  
  render() {
    return(
      <div>
        <p>List of Widgets</p>
        {this.renderWidgets()}
      </div>
    )
  }
}

export default connect(null, null)(App)
