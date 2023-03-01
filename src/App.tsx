import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {BlacksmithPage} from "./pages/blacksmith/blacksmith";

function App() {
  return (
    <Routes>
      <Route path={"*"} element={<BlacksmithPage/>}/>
    </Routes>
  );
}

export default App;
