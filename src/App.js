import React from "react";
import NavBar from "./components/navBer/NavBar";
import HeroSection from "./components/heroSection/HeroSection";
import AboutUs from "./components/aboutUs/AboutUs";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Products />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
