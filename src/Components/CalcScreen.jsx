import React, { Component } from 'react';
import ScaledText from "./ScaledText";


class CalcScreen extends Component {
  render() {
    const { value, operator } = this.props;
    return (
      <div className="calculator-display">
        <ScaledText>{value}</ScaledText>
        <div className="operator-current">{operator}</div>
      </div>
    )
  }
}

export default CalcScreen;
