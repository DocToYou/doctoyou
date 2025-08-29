import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AuthPage } from "./pages/AuthPage";
import { TrainAttend } from "./pages/TrainAttend";
import ScrollToTop from "./ScrollToTop";
import DoctorSearchBar from "./components/home/DoctorSearchBar";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/services/:name" element={<TrainAttend />} />
        <Route path="/test" element={<DoctorSearchBar />} />
        {/* <Route path='/test' element={<Test />} /> */}
        {/* <Route  path="/Tracking" element={<Tracking/>}/> */}
      </Routes>
    </Router>
  );
};

export default App;
