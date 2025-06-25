import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Feedback from "../pages/Feedback";
import Privacy from "../pages/Privacy";
import Policy from "../pages/Policy";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/policy" element={<Policy />} />
    </Routes>
  );
}
