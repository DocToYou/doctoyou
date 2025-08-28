import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AuthPage } from "./pages/AuthPage";
import { Train_att } from "./pages/Train_att";
import ScrollToTop from "./ScrollToTop";
import DoctorSearchBar from "./components/home/DoctorSearchBar";


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/:mode" element={<AuthPage />} />
        <Route path="/services/:name" element={<Train_att />} />
        <Route path="/test" element={<DoctorSearchBar />} />
        {/* <Route path='/test' element={<Test />} /> */}
        {/* <Route  path="/Tracking" element={<Tracking/>}/> */}
      </Routes>
    </Router>
  );
};

export default App;
