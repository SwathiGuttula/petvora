import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Dogs from "./components/Dogs";
import Cats from "./components/Cats";
import Rabbits from "./components/Rabbits";
import Birds from "./components/Birds";
import About from "./components/About";
import Tips from "./components/Tips";
import Volunteer from "./components/Volunteer";
import Register from "./components/Register";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default route shows Registration page first */}
        <Route path="/" element={<Register />} />

        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/rabbits" element={<Rabbits />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/about" element={<About />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </Router>
  );
}
