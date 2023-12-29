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
import { BsList } from "react-icons/bs";
import { ImCross } from "react-icons/im";

function App() {

  const [navShow, setNavShow] = useState(false);
  
  const view = navShow ? "left-0" : "left-[-500px]";

  return (
    <BrowserRouter>
      <div
        onClick={() => setNavShow(prev=>!prev)}
        className="fixed sm:hidden z-50 p-2 rounded-full text-white top-3 right-3 bg-blue-500"
      >
        {!navShow && <BsList />}
      {navShow && <ImCross />}
      </div>
      
      <div className="flex flex-row h-full w-screen bg-blue-50">
        <div className={`sm:w-1/4 absolute z-50 w-4/5 sm:static sm:left-0 transform ease-in-out duration-500 ${view}`}>
          <Nav setNavShow={setNavShow } />
        </div>
        <div className="sm:w-3/4 w-full h-screen overflow-y-scroll">
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
