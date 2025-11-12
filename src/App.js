import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import ContactForm from "./Components/ContactForm"; // Import ContactForm component
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router basename="{process.env.PUBLIC_URL}">
        {" "}
        {/* Ensure basename matches your deployment */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<ContactForm />} />{" "}
          {/* Route for ContactForm */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
