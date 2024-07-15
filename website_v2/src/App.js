import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
// import Projects from "./pages/Projects.js";
import Skills from "./pages/Skills.js";
import Contact from "./pages/Contact.js";
export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <Routes>
      <Route path="/" element={<Home theme={theme} toggle={toggleTheme} />} />
      {/* <Route path="/projects" element={<Projects theme={theme} />} /> */}
      <Route path="/skills" element={<Skills theme={theme} />} />
      <Route path="/contact" element={<Contact theme={theme} />} />
    </Routes>
  );
}
