import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import DangKy from "./components/DangKy/DangKy.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dangky" element={<DangKy />}></Route>
    </Routes>
  );
}

export default App;
