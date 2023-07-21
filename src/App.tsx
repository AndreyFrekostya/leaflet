import React from 'react';
import './styles/global styles/styles.css';
import Header from './components/Header';
import MainOutlet from './components/MainOutlet';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainOutlet/>
    </div>
  );
}

export default App;
