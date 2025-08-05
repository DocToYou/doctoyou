import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AuthPage } from './pages/AuthPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/auth/:mode' element={<AuthPage />} />
        {/* <Route path='/test' element={<Test />} /> */}
      </Routes>
    </Router>
  );
};


export default App
