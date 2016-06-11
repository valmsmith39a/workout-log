import React from 'react'
import { connect } from 'react-redux'
import {
  addAWidget
} from '../actions/widgets/widgets'

import Widget from './widgets/widget'
import WidgetTextInput from './widgets/widgetTextInput'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  handleSave(text) {
    console.log('text in handleSave: ', text);
    this.props.addAWidget(text)
  }

  renderWidgets() {
    return this.props.widgets.map((widget, index) => {
      console.log('widget in render is: ', widget, index);
      return (
        <Widget key={index} widget={widget} />
      )
    })
  }

  render() {
    return (
      <div>
        <p>List of Widgets</p>
        <br />
        <WidgetTextInput
          onSave={this.handleSave.bind(this)}
          placeholder='Describe your workout' />
        {this.renderWidgets()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { addAWidget })(App)
