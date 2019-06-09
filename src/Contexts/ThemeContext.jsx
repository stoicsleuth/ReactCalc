import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false
    }
    this.toggleThemeLight = this.toggleThemeLight.bind(this);
    this.toggleThemeDark = this.toggleThemeDark.bind(this);
  }
  toggleThemeLight() {
    this.setState({ isDarkMode: false })
  }
  toggleThemeDark() {
    this.setState({ isDarkMode: true })
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleThemeLight: this.toggleThemeLight, toggleThemeDark: this.toggleThemeDark }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}