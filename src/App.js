import React, { Component } from 'react'
import './App.css'


class App extends Component {
  renderSomething() {
    return <div>
      somethingwafeawef
    </div>
  }

  renderSomethingElse() {
    return <div>
      something elsewef
    </div>
  }

  render() {
    return (
      <div>
        {this.renderSomething()}
        {this.renderSomethingElse()}
      </div>
    )
  }
}

export default App
