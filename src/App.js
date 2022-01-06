import React from 'react';
// import logo from './logo.svg';
import Nav from './components/Nav';
import './App.css';
import About from './components/About';

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
