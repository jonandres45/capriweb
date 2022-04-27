import React from 'react';
import {Menu} from '../Menu';
import {Presentation} from '../Presentation';
import './App.css';

function App() {
  return (
    <React.StrictMode>      
      <Presentation/>
      <Menu/>
    </React.StrictMode>
  );
}

export default App;
