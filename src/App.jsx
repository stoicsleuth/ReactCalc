import React from 'react';
import './App.css';
import Calc from './Components/Calc';
import PageContent from './Components/PageContent'
import { ThemeProvider } from "./Contexts/ThemeContext";


function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <div className="App">
          <Calc/>
        </div>
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
