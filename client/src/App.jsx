import { useState } from "react"
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Leadership from "./components/about/leadership/Leadership";
import Location from "./components/about/location/Location";
import Menu from "./components/menu/Menu";
import Messages from "./components/messages/Messages"
import Footer from "./components/footer/Footer";
import PeacePost from "./components/peacepost/PeacePost";
import Connect from "./components/connect/Connect";
import { Route, Routes } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <a href="#home" className="skip-to-content-link">Skip To Content</a>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/location" element={<Location />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/peacepost" element={<PeacePost />} />
        <Route path="/connect" element={<Connect />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;