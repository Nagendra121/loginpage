import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login"
import Main from './Components/Main';


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
