import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/breadcrumbs";

function Brands() {
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
      <div className=" flex-wrap content-center justify-center w-screen h-screen">
        <div className="container w-80">
          <TailwindSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      <div className="bg-[url('/images/businesses.jpg')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
        <Breadcrumbs home="home" current="Business" />
      </div>
      <div className="container-fluid flex flex-wrap flex-grow border-t py-5 md:py-10 mx-1 md:mx-5">
        <div className="container flex flex-wrap  justify-center content-center my-5 w-full">
          <h1 className="text-3xl font-bold uppercase" data-aos="fade-up">
            Uniting Innovation Across Industries
          </h1>
          <p className="text-sm text-justify mt-4" data-aos="fade-up" data-aos-delay="100">
            Explore Our Dynamic Portfolio of Brands and Ventures Spanning Across Golf, Advertising,
            Professional Services, Cutting-Edge Technology, Global Travel, and Beyond. Discover How
            New Element Is Redefining Excellence and Innovation in Each Sector, Elevating Customer
            Experiences and Setting New Standards in Business.
          </p>
        </div>
        <div className="container flex flex-wrap w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-4">
          {businesses.map((business, index) => (
            <div className="w-full" data-aos="fade-up" data-aos-delay="200">
              <Link to={business.link}>
                <Card key={index} className="rounded-none shadow-lg">
                  <img
                    src={business.image}
                    className="w-full object-cover object-bottom h-64"
                    alt={business.title}
                  />
                  <CardContent className="my-1 p-4">
                    <h1 className="text-lg font-semibold line-clamp-1">{business.title}</h1>
                    <p className="text-xs text-zinc-700 text-justify text-pretty line-clamp-4">
                      {business.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-0">
                    <Link
                      to={business.link}
                      className="w-full text-center py-1 bg-slate-950 text-white border border-slate-950 hover:bg-slate-950/90 transition-all duration-300"
                    >
                      view
                    </Link>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Brands;
