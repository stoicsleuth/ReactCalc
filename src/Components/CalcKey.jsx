import React, { Component } from 'react';
import { ThemeContext } from "./../Contexts/ThemeContext";

class CalcKey extends Component {
    static contextType = ThemeContext;
    render() {
        const { className, ...props } = this.props;
        const { isDarkMode } = this.context;
        const styles = {
            backgroundColor: isDarkMode ? "#666" : "rgb(228, 228, 228)",
            color: isDarkMode ? "white" : "black",
            borderTop: isDarkMode ? "1px solid white" : "1px solid #666",
            borderRight: isDarkMode ? "1px solid white" : "1px solid #666",
        };
        return (
            <button style={styles} className={`calculator-key ${className}`} {...props} />

        )
    }
}

export default CalcKey;