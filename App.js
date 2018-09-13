
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import LikesComponent from './src/components/LikesComponent'

class App extends Component {
  render () {
    return (
      <LikesComponent></LikesComponent>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('app'))