import React from 'react';
import {Menu} from '../Menu';
import {Presentation} from '../Presentation';
import {Capri} from '../Capri';
import {Indices} from '../Indices';
import {Footer} from '../Footer';
import {Uma} from '../Uma';
import {Udis} from '../Udis';
import {Tablas} from '../Tablas';
import {
  Routes,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <React.StrictMode>      
      <Presentation/>        
        <Routes>
          <Route path="/" element={<Menu/>}>
            <Route path="*" element={<Capri/>}/>
            <Route index element={<Capri/>}/>
            <Route path="indices" element={<Indices/>}/>
            <Route path="uma" element={<Uma/>}/>
            <Route path='udis' element={<Udis/>}/>
            <Route path="tablas" element={<Tablas/>}/>
          </Route>
        </Routes>
      <hr size="1"></hr>
      <Footer/>
    </React.StrictMode>
  );
}

export default App;
