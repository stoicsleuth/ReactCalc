
import React, { Component } from 'react';
import CalcKey from './CalcKey';
import CalcScreen from './CalcScreen';
import './Calc.css';
import ScnKeys from './ScnKeys';
import { ThemeContext } from "./../Contexts/ThemeContext";

const CalcOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue,
  '√': (nextValue) => Math.sqrt(nextValue),
  '^': (nextValue) => nextValue * nextValue
}


class Calc extends Component {

  static contextType = ThemeContext;

  state = {
    value: null,
    screenValue: '0',
    operator: null,
    operandWait: false,
    scnMode: false,
    theme: 'light'
  };


  clearAll() {
    this.setState({
      value: null,
      screenValue: '0',
      operator: null,
      operandWait: false
    })
  }

  toggleSign() {
    const { screenValue } = this.state;
    const newValue = parseFloat(screenValue) * -1;
    this.setState({
      screenValue: String(newValue)
    })
  }

  toggleMode() {
    const { scnMode } = this.state;
    this.setState({
      scnMode: !scnMode
    })
  }

  toggleTheme() {
    this.setState(state => ({
      theme: state.theme === "dark" ? "light" : "dark"
    }));
  };


  inputDigit(digit) {
    const { screenValue, operandWait } = this.state;
    if (operandWait) {
      this.setState({
        screenValue: String(digit),
        operandWait: false
      })
    } else if (screenValue == "Infinity") {
      this.clearAll();
      this.setState({
        screenValue: String(digit)
      })
    } else {
      this.setState({
        screenValue: screenValue === '0' ? String(digit) : screenValue + digit
      })
    }
  }

  performOperation(nextOperator) {
    const { value, screenValue, operator } = this.state;
    const inputValue = parseFloat(screenValue);

    if (nextOperator === '√' || nextOperator === '^') {
      const value = CalcOperations[nextOperator](inputValue);
      this.setState({
        value: value,
        screenValue: String(value)
      })
      return;
    }
    else if (value == null) {
      this.setState({
        value: inputValue
      })
    }
    else if (operator && this.state.operandWait != true) {
      const currentValue = value || 0;
      const newValue = CalcOperations[operator](currentValue, inputValue);
      this.setState({
        value: newValue,
        screenValue: String(newValue)
      })
    }
    this.setState({
      operandWait: true,
      operator: nextOperator
    })
  }




  render() {
    const { screenValue, scnMode, operator } = this.state;
    return (
      <div className="calculator">
        <CalcScreen value={screenValue} operator={operator} />
        <div className="calculator-keypad">
          <div className="input-keys">
            {scnMode &&
              <div className="scientific-keys">
                <ScnKeys toggleSign={this.toggleSign.bind(this)} performOperation={this.performOperation.bind(this)} />
              </div>
            }
            <div className="digit-keys">
              <CalcKey className="key-1" onClick={() => this.inputDigit(1)}>1</CalcKey>
              <CalcKey className="key-2" onClick={() => this.inputDigit(2)}>2</CalcKey>
              <CalcKey className="key-3" onClick={() => this.inputDigit(3)}>3</CalcKey>
              <CalcKey className="key-4" onClick={() => this.inputDigit(4)}>4</CalcKey>
              <CalcKey className="key-5" onClick={() => this.inputDigit(5)}>5</CalcKey>
              <CalcKey className="key-6" onClick={() => this.inputDigit(6)}>6</CalcKey>
              <CalcKey className="key-7" onClick={() => this.inputDigit(7)}>7</CalcKey>
              <CalcKey className="key-8" onClick={() => this.inputDigit(8)}>8</CalcKey>
              <CalcKey className="key-9" onClick={() => this.inputDigit(9)}>9</CalcKey>
              <CalcKey className="key-clear" onClick={() => this.clearAll()}>Clear</CalcKey>
              <CalcKey className="key-0" onClick={() => this.inputDigit(0)}>0</CalcKey>
              <CalcKey className="key-equals" onClick={() => this.performOperation('=')}>=</CalcKey>
            </div>
          </div>
          <div className="operator-keys">
            <CalcKey className="key-add" onClick={() => this.performOperation('+')}>+</CalcKey>
            <CalcKey className="key-subtract" onClick={() => this.performOperation('-')}>−</CalcKey>
            <CalcKey className="key-multiply" onClick={() => this.performOperation('*')}>×</CalcKey>
            <CalcKey className="key-divide" onClick={() => this.performOperation('/')}>÷</CalcKey>
            {scnMode && <CalcKey className="key-switch-back" onClick={() => this.toggleMode()}>Back</CalcKey>}
          </div>
        </div>
        {!scnMode &&
          <div className="switch-key">
            <CalcKey className="key-switch" onClick={() => this.toggleMode()}>Switch to Scientific</CalcKey>
          </div>
        }
      </div>
    )
  }
}

export default Calc;

