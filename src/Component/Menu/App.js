import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Formdata from "./Formdata";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/Formdata" element={<Formdata />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
