import React, { Component } from 'react'
import './App.css'


class App extends Component {
  renderSomething = () => {
    return <div>
      fiwoeweg gaweg d weofawef
    </div>
  }

  render() {
    return (
      <div>
        {this.renderSomething()}
      </div>
    )
  }
}

export default App
