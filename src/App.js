import React from 'react';
import './App.css';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu /> {/* Agrega el componente de menú aquí */}
        <p>
          Hola Mundo
        </p>
      </header>
    </div>
  );
}


export default App;
