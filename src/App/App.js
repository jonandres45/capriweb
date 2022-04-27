import React from 'react';
import {Menu} from '../Menu';
import {Presentation} from '../Presentation';
import {Capri} from '../Capri';
import './App.css';

function App() {
  return (
    <React.StrictMode>      
      <Presentation/>
      <Menu/>
      <Capri/>
    </React.StrictMode>
  );
}

export default App;
