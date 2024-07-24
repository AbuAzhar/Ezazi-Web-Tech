import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
