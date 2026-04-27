import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Courses from "./pages/Courses";
import Teach from "./pages/Teach";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import "leaflet/dist/leaflet.css";
import CourseUpload from "./pages/CourseUpload";
import BasicInfo from "./components/CourseUpload/BasicInfo";
// ✅ FIXED IMPORT
import Curriculum from "./components/CourseUpload/Carriculum";
import Media from "./components/CourseUpload/Media";
import Pricing from "./components/CourseUpload/Pricing";
import Publish from "./components/CourseUpload/Publish";
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

  {/* ✅ NESTED FLOW */}
  <Route path="/courseupload" element={<CourseUpload />}>
    <Route index element={<BasicInfo />} />
    <Route path="curriculum" element={<Curriculum />} />
    <Route path="media" element={<Media />} />
        <Route path="pricing" element={<Pricing/>} />
          <Route path="publish" element={<Publish/>} />
  </Route>
</Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;