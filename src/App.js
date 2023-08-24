import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";

import About from "./pages/About";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import AuthContect from "./contexts/AuthContext";
import { useState } from "react";

function App() {

  const [auth, setAuth] = useState(false);

  return (
    <AuthContect.Provider value={[auth, setAuth]} >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContect.Provider>
  );
}

export default App;
