import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Installation from "./pages/Installation";
import Features from "./pages/Features";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
