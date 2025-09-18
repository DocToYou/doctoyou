import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./user/pages/Home";
import { AuthPage } from "./user/pages/AuthPage";
import { Services } from "./user/pages/Services";
import ScrollToTop from "./ScrollToTop";
import DoctorSearchBar from "./user/components/home/DoctorSearchBar";
import { EmergencyBook } from "./user/pages/EmergencyBook";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/services/:name" element={<Services />} />
        <Route path="/test" element={<DoctorSearchBar />} />
        {/* <Route path='/test' element={<Test />} /> */}
        {/* <Route  path="/Tracking" element={<Tracking/>}/> */}
        <Route path="/EmergencyBooking" element={<EmergencyBook />} />
      </Routes>
    </Router>
  );
};

export default App;
