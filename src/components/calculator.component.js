import React from 'react'
import './style.main.css'
import Buttons from './buttons/buttons.component'
import DisplayBar from './displayBar/displayBar.component'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expression: '',
      currentLog: '0',
      prevInput: null

    }
  }

  dict = {
    '+': '+',
    '-': '-',
    '*': '*',
    '/': '/'
  }
  handleOperation(x, y, operator) {
    switch (operator) {
      case '+':
        return Number(x) + Number(y)
      case '-':
        return Number(x) - Number(y)
      case '*':
        return Number(x) * Number(y)
      case '/':
        return Number(x) / Number(y)
    }
  }

  solveExpression(expression) {
    const numbers = expression.split(/[+*/-]/)
    const operators = expression.split(/[0-9]/).join('').split('')
    const priority = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2
    }

    while (numbers.length >= 3) {
      const op1 = operators[0]
      const op2 = operators[1]
      if (priority[op2] > priority[op1]) {
        numbers[2] = this.handleOperation(numbers[1], numbers[2], operators[1])
        operators.splice(1, 1)
        numbers.splice(1, 1)
      } else {
        numbers[0] = this.handleOperation(numbers[0], numbers[1], operators[0])
        operators.shift()
        numbers.splice(1, 1)
      }
    }
    if (numbers.length === 2) {
      return this.handleOperation(numbers[0], numbers[1], operators[0])
    } else if (numbers.length === 1) {
      return numbers[0]
    }
  }

  handleOperatorInput(currentLog, expression, prevInput, ButtonsData) {
    if (Number(prevInput) || Number(prevInput) === 0) {
      this.setState((state, props) => ({
        expression: state.expression + ButtonsData,
        currentLog: ButtonsData,
      }))
    } else if (prevInput in this.dict) {
      this.setState((state, props) => ({
        expression: state.expression,
        currentLog: ButtonsData,
      }))
    } else if (prevInput === '.') {
      const exp = expression
      exp.splice(-1)
      this.setState((state, props) => ({
        expression: exp + ButtonsData,
        currentLog: '',
      }))
    } else if (prevInput === '=') {
      this.setState((state, props) => ({
        expression: state.currentLog + ButtonsData,
        currentLog: ButtonsData
      }))
    } else if (prevInput === 'AC') {
      this.setState((state, props) => ({
        expression: '',
        currentLog: ''
      }))
    }
  }

  handleNumberInput(currentLog, expression, prevInput, ButtonsData) {
    if (currentLog === '0' || prevInput === 'AC') {
      this.setState((state, props) => ({
        expression: state.expression + ButtonsData,
        currentLog: String(ButtonsData)
      }))
    } else if (Number(prevInput) || Number(prevInput) === 0 || prevInput === '.') {
      this.setState((state, props) => ({
        expression: state.expression + ButtonsData,
        currentLog: state.currentLog + String(ButtonsData)
      }))
    } else if (prevInput in this.dict) {
      this.setState((state, props) => ({
        expression: state.expression + ButtonsData,
        currentLog: ButtonsData
      }))
    } else if (prevInput === '=') {
      this.setState((state, props) => ({
        expression: '',
        currentLog: ButtonsData
      }))
    }
  }

  handleDecimalInput(currentLog, expression, prevInput, ButtonsData) {
    const count = currentLog.split('.').length - 1
    console.log(currentLog, count)
    if (count === 0) {
      this.setState((state, props) => ({
        currentLog: state.currentLog + ButtonsData,
        expression: state.expression + ButtonsData
      }))
    }
  }

  handleACInput() {
    this.setState({
      currentLog: '0',
      expression: ''
    })
  }

  handleCalculateInput(expression, ButtonsData) {
    const result = this.solveExpression(expression)
    this.setState((state, props) => ({
      expression: state.expression + ButtonsData + String(result),
      currentLog: result
    }))
  }

  handleCallBack(ButtonsData) {
    const currentLog = this.state.currentLog
    const prevInput = this.state.prevInput
    let expression = this.state.expression

    if (ButtonsData in this.dict) {
      this.handleOperatorInput(currentLog, expression, prevInput, ButtonsData)
    }
    else if (Number(ButtonsData) || Number(ButtonsData) === 0) {
      this.handleNumberInput(currentLog, expression, prevInput, ButtonsData)
    }
    else if (ButtonsData === '.') {
      this.handleDecimalInput(currentLog, expression, prevInput, ButtonsData)
    }
    else if (ButtonsData === 'AC') {
      this.handleACInput()
    }
    else if (ButtonsData === '=') {
      this.handleCalculateInput(expression, ButtonsData)
    }
    this.setState({
      prevInput: ButtonsData
    })
  }

  render() {
    return (
      <div id='window'>
        <DisplayBar log={this.state.currentLog} expression={this.state.expression} />
        <Buttons onParentCallBack={(e) => this.handleCallBack(e)} />
      </div>
    )
  }
}

export default Calculator
