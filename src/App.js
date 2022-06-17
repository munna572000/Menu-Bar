import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Formdata from "./Formdata";
import BasicExample from "./BasicExample";
import LoginForm from "./LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <BasicExample />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/formdata" element={<Formdata />} />
          <Route exact path="/loginform" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
