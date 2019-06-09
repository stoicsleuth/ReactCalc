import React, { Component } from "react";
import { ThemeContext } from "./../Contexts/ThemeContext";

class PageContent extends Component {
    static contextType = ThemeContext;
    render() {
        const { isDarkMode, toggleThemeLight, toggleThemeDark } = this.context;
        const styles = {
            backgroundColor: isDarkMode ? "black" : "white",
            height: "100vh",
            width: "100vw"
        };
        return (
            <div style={styles} className="wrapper">
                <div className="switch-buttons">
                    <button className="dark-button" onClick={toggleThemeDark}>Dark Mode</button>
                    <button className="light-button" onClick={toggleThemeLight}>Light Mode</button>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default PageContent;