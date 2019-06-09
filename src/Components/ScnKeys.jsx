import React, { Component } from 'react';
import CalcKey from './CalcKey';

class ScnKeys extends Component {
    constructor(props) {
        super(props)
        this.mountStyle = this.mountStyle.bind(this)
        this.state = {
            show: true,
            style: {
                opacity: 0,
                transition: 'all 2s ease',
            }
        }
    }

    mountStyle() {
        this.setState({
            style: {
                opacity: 1,
                transition: 'all 1s ease',
            }
        })
    }

    componentDidMount() {
        setTimeout(this.mountStyle, 2)
    }

    render() {
        const { toggleSign, performOperation } = this.props;
        return (
            <React.Fragment>
                <CalcKey style={this.state.style} className="key-sign" onClick={() => toggleSign()}>±</CalcKey>
                <CalcKey style={this.state.style} className="key-2" onClick={() => performOperation('√')}>√</CalcKey>
                <CalcKey style={this.state.style} className="key-3" onClick={() => performOperation('^')}>Square</CalcKey>
            </React.Fragment>
        )
    }
}

export default ScnKeys;
