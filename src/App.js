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
  return (
    <div className="App">
      <Header />
      {/* <Contact /> */}
      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/" element={<Navigate to="/work" replace />} />
          <Route path="/work" element={<WorkGallery />} />
          <Route path="/work/:id" element={<WorkDetailPage />} />
          {/* <Route path="/Work" element={<Work />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
