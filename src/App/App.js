import React from 'react';
import {Menu} from '../Menu';
import {Presentation} from '../Presentation';
import {Capri} from '../Capri';
import {Footer} from '../Footer';
import './App.css';

function App() {
  return (
    <React.StrictMode>      
      <Presentation/>
      <Menu/>
      <Capri/>
      <hr size="1"></hr>
      <Footer/>
    </React.StrictMode>
  );
}

export default App;
