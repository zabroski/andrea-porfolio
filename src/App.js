// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Header from "./Components/Header/header.js";
// import About from "./Components/About/about.js";
// import Contact from "./Components/Contact/contact.js";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <main style={{ paddind: "2em" }}>
//         <Routes>
//           <Route path="/" element={<h1>Home Page</h1>} />
//           <Route path="/" element={<About />} />
//           <Route path="/" element={<Contact />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;

import Header from "./Components/Header/header.js";
import Contact from "./Components/Contact/contact.js";
import About from "./Components/About/about.js";
import Work from "./Components/Work/work.js";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Contact /> */}
      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
