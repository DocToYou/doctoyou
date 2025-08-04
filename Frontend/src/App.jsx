import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { Home } from './pages/Home';
import { AuthPage } from './pages/AuthPage';
import { Login } from './components/Login';
import { Cards } from './components/Cards';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/auth' element={<AuthPage />} />
        {/* <Route path='/signup' element={<Service />} /> */}
      </Routes>
    </Router>
  );
};


export default App
