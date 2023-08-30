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
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
