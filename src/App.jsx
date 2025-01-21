import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen overflow-y-auto">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
