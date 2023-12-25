import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-row h-full w-screen bg-blue-50">
        <div className="w-1/4">
          <Nav />
        </div>
        <div className="w-3/4 h-screen overflow-y-scroll">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
