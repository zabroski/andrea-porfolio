import React, { useEffect, useState } from "react";
import Header from "./Components/Header/header.js";
import Contact from "./Components/Contact/contact.js";
import About from "./Components/About/about.js";
import Work from "./Components/Work/work.js";

import WorkGallery from "./WorkGallery";
import WorkDetailPage from "./WorkDetailPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  // 🔹 Load saved theme on mount

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") setDarkMode(true);
  }, []);

  // 🔹 Toggle and save theme preference
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };
  // return (
  //   <div className="App">
  //     <Header />
  //     {/* <Contact /> */}
  //     <main style={{ padding: "2rem" }}>
  //       <Routes>
  //         <Route path="/" element={<About />} />
  //         <Route path="/" element={<Navigate to="/work" replace />} />
  //         <Route path="/work" element={<WorkGallery />} />
  //         <Route path="/work/:id" element={<WorkDetailPage />} />
  //         {/* <Route path="/Work" element={<Work />} /> */}
  //         <Route path="/contact" element={<Contact />} />
  //       </Routes>
  //     </main>
  //   </div>
  // );

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* === Header (includes toggle) === */}
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      {/* === Main Routes === */}
      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/work" element={<WorkGallery />} />
          <Route path="/work/:id" element={<WorkDetailPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* fallback redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* === Optional Footer === */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
