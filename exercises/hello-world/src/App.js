import React from 'react';
import './App.css';

const compromissos = ['Acordar', 'Comer', 'Dormir'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>
      {
      compromissos
      .map(compromisso => task(compromisso))
      }
    </ul>
  );
}

export default App;
