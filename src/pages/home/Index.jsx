import React, { useState } from "react";
import Header from "../../components/Header";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import TailwindSpinner from "@/components/TailwindSpinner";
import { HeroSection } from "./hero-section";
import { StoriesSection } from "./stories-section";
import { BusinessSection } from "./business-section";
import { GolfShowcaseSection } from "./golf-showcase-section";
import { BlogSection } from "./blog-section";
import { UpdateSection } from "./update-section";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    fetch("/data/business.json")
      .then((response) => response.json())
      .then((data) => {
        setBusinesses(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    AOS.init();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-wrap content-center justify-center w-screen h-screen">
        <div className="container w-80">
          <TailwindSpinner />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[url('/images/newelement-banner.jpg')] bg-cover bg-center">
        <div className="bg-slate-900/10">
          <Header />
          <HeroSection />
        </div>
      </div>
      <StoriesSection />
      <BusinessSection data={businesses} />
      <GolfShowcaseSection />
      <BlogSection />
      <UpdateSection />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
