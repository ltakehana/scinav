import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
};

export default App;
