import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Homepage from './Components/Homapage/Homepage';
import About from './Components/Homapage/About/About';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Homepage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Register />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/about" exact element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App