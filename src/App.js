import React from 'react';
import './App.css';
import Logo from './component/Logo';
import brightLogo from "./images/brightLogo.jpeg"
import bright from "./images/bright.jpeg"


function App() {
  return (
    <div className="App">
      <Logo img={bright} imgLogo={brightLogo} />
    </div>
  );
}

export default App;
