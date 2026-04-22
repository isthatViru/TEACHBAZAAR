import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Courses from "./pages/Courses";
import Teach from "./pages/Teach";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import "leaflet/dist/leaflet.css";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/teach" element={<Teach />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  <Footer/>
    </BrowserRouter>
  );
}

export default App;