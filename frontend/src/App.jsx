import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import TryPersonaVerse from "./pages/TryPersonaVerse/TryPersonaVerse";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/try/*" element={<TryPersonaVerse />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
