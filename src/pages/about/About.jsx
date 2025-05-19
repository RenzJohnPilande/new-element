import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Breadcrumbs } from "../../components/breadcrumbs";

function About() {
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="flex flex-col min-h-screen bg-zinc-50">
      <div className="bg-[url('/images/about-us.jpg')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
        <Breadcrumbs home="home" current="about us" />
      </div>
      <div className="container flex-grow flex flex-wrap py-5 px-3">
        <div className="flex flex-wrap w-full">
          <div className="flex flex-wrap w-full content-start">
            <div className="flex flex-wrap flex-col content-center justify-center w-full my-6 text-center ">
              <h1 className="text-3xl font-bold text-black mb-2" data-aos="fade-up">
                About Us
              </h1>
              <p className="text-base text-black" data-aos="fade-up">
                Discover our story, explore our values, and understand our goals
              </p>
            </div>
            <div
              className="flex flex-wrap w-full md:px-10 text-pretty border bg-white p-6 shadow-lg"
              data-aos="fade-up"
            >
              <div className="w-full text-base text-justify">
                <h1 className="text-xl font-semibold capitalize mb-4">Company Profile</h1>
                <p className="leading-8 mb-4">
                  Welcome to <span className="font-semibold">New Element Inc.</span>, established in
                  2015 with a singular focus on advancing the golf industry in the Philippines.
                  Located in Ayala Alabang, Muntinlupa City, our company specializes in a wide range
                  of products and services crafted to enrich the golfing experience.
                </p>
                <p className="leading-8 mb-4">
                  At New Element Inc., our vision is clear: to devote ourselves to the promotion and
                  development of the golf industry in the Philippines, striving to elevate standards
                  and accessibility. We are committed to fostering growth and innovation within the
                  sector, ensuring that enthusiasts of all ages and genders have access to
                  top-quality golf apparel, accessories, and equipment. Our expertise extends to
                  providing specialized marketing and advertising solutions, professional management
                  agency services, expert tournament organization, bespoke golf travel experiences,
                  innovative golf carts and gadgets, and an online information platform catering to
                  the needs of the golfing community.
                </p>
                <p className="leading-8 mb-4">
                  Founded with a commitment to excellence and ethical business practices, New
                  Element Inc. aims not only to meet but exceed the expectations of our diverse
                  clientele. Guided by unwavering integrity, we aspire to lead the way in setting
                  new benchmarks for the golf industry in the Philippines and beyond.
                </p>
                <p className="leading-8 mb-4">
                  Join us at New Element Inc., where we combine innovation with integrity to unlock
                  the full potential of the golfing world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
