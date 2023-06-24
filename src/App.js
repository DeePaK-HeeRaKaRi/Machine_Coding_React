 
import React from 'react'
import { Routes, Route } from "react-router-dom";
import ColorChange from './ColorChange/ColorChange';
import AutoComplete from './AutoComplete/AutoComplete'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/matrix-Boxes" element={<ColorChange />}></Route>
        <Route path="/autocomplete-typehead" element={<AutoComplete />}></Route>
      </Routes>
    </div>
  );
}

export default App;
