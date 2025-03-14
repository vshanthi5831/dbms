import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/core/Navbar";
import Login from "./pages/login";
import Home from "./pages/home";
import Donate from "./pages/donate";
import About from "./pages/about";
import KnowMore from "./pages/know_more";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/more" element={<KnowMore/>} />
      </Routes>
    </Router>
  );
}


