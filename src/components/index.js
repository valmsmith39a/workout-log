import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import {
  getWidgets,
  addAWidget
} from '../actions/widgets/widgets'

import Widget from './widgets/widget'
import AddWidget from './widgets/addAWidget'
import ListOfWidgets from './widgets/ListOfWidgets'

export class App extends React.Component {

  /*
    Container component:
    - How things work
    - Provides behavior and data
    - Calls actions and provides as callbacks to presentational components
  */

  constructor(props) {
    super(props)

    this.handleSaveWidget = this.handleSaveWidget.bind(this)
  }

  handleSaveWidget(text) {
    this.props.addAWidget(text)
  }

  render() {
    return(
      <div>
        <AddWidget handleSaveWidget={this.handleSaveWidget} />
        <br />
        <ListOfWidgets widgets={this.props.widgets} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { getWidgets, addAWidget })(App)
