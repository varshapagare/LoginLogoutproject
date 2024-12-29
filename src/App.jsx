
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Loginpage';
import HomePage from './Components/Homepage';
// import LoginPage from './components/Login';
// import HomePage from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;