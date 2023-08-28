import React from 'react';
import { 
  BrowserRouter, 
  Route, 
  Routes } 
  from 'react-router-dom'
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
