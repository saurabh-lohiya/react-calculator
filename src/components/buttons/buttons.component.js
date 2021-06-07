import React, { Component } from 'react'

import './style.main.css'
class Buttons extends Component {
  // const[log, setLog] = useState('')
  constructor (props) {
    super(props)
    this.state = {
      log: '',
      expression: ''
    }
  }

  handleClick (e) {
    this.props.onParentCallBack(String(e.target.innerText))
    this.setState((state, props) => ({
      log: state.log + String(e.target.innerText)
    }))
  }

  render () {
    return (
      <div id='buttons'>
        <button
          id='clear'
          onClick={(e) => this.handleClick(e)}
          style={{ background: '#ef233c' }}
        >
          AC
        </button>
        <button
          id='divide'
          onClick={(e) => this.handleClick(e)}
        >
          /
        </button>
        <button
          id='multiply'
          onClick={(e) => this.handleClick(e)}
        >
          *
        </button>
        <button
          id='seven'
          onClick={(e) => this.handleClick(e)}
        >
          7
        </button>
        <button
          id='eight'
          onClick={(e) => this.handleClick(e)}
        >
          8
        </button>
        <button
          id='nine'
          onClick={(e) => this.handleClick(e)}
        >
          9
        </button>
        <button
          id='substract'
          onClick={(e) => this.handleClick(e)}
        >
          -
        </button>
        <button
          id='four'
          onClick={(e) => this.handleClick(e)}
        >
          4
        </button>
        <button
          id='five'
          onClick={(e) => this.handleClick(e)}
        >
          5
        </button>
        <button
          id='six'
          onClick={(e) => this.handleClick(e)}
        >
          6
        </button>
        <button
          id='add'
          onClick={(e) => this.handleClick(e)}
        >
          +
        </button>
        <button
          id='one'
          onClick={(e) => this.handleClick(e)}
        >
          1
        </button>
        <button
          id='two'
          onClick={(e) => this.handleClick(e)}
        >
          2
        </button>
        <button
          id='three'
          onClick={(e) => this.handleClick(e)}
        >
          3
        </button>
        <button
          id='equals'
          style={{ background: '#0466c8' }}
          onClick={(e) => this.handleClick(e)}
        >
          =
        </button>
        <button
          id='zero'
          onClick={(e) => this.handleClick(e)}
        >
          0
        </button>
        <button
          id='decimal'
          onClick={(e) => this.handleClick(e)}
        >
          .
        </button>
      </div>
    )
  }
}

export default Buttons
