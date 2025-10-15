import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Screenshots from "../components/Screenshots";
import CTA from "../components/CTA";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Screenshots />
      <CTA />
    </div>
  );
};

export default Home;
