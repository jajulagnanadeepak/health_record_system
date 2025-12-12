import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Header/Login';
import Signup from './components/Header/Signup';
import About from './components/Header/about';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Doctors_Dashboard from './components/Doctors_Dashboard';
import Patients from './components/Patients';
import Forget_Password from './components/Forget_Password';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/Doctors" element={<Doctors_Dashboard />} />
        <Route path="/Patients" element={<Patients />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/forgot-password" element={<Forget_Password />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
