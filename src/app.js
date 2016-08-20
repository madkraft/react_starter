require('./styles/main.styl')
import React from 'react'
import ReactDOM from 'react-dom'

const Hello = React.createClass({
  render () {
    return <div>Hello World!</div>
  }
})

ReactDOM.render(<Hello />, document.body)
