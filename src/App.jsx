import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/footer";
// import Tasks from "./pages/Tasks";

import "./App.css";
import Projects from "./pages/Projects";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      {/* <Tasks /> */}
      <Contact />
      <About />
      <Footer />
    </>
  );
}

export default App;
