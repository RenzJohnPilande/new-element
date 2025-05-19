import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Breadcrumbs } from "../../components/breadcrumbs";

function Vision() {
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
      <div className="bg-vision lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
        <Breadcrumbs
          home="home"
          previousPages={[{ name: "about us", link: "/about" }]}
          current="our purpose"
        />
      </div>
      <div className="container-fluid flex-grow flex flex-wrap py-5 px-3 w-full text-black">
        <div className="flex flex-wrap w-full">
          <div className="container flex flex-wrap w-full content-start px-2">
            <div className="flex flex-wrap flex-col content-center justify-center w-full my-6 text-center text-pretty">
              <span className="text-3xl font-bold mb-2" data-aos="fade-up">
                Our Vision and Mission
              </span>
              <p className="text-lg" data-aos="fade-up" data-aos-delay="100">
                The future we envision and the mission that inspires us
              </p>
            </div>
            <div
              className="flex flex-wrap w-full shadow-lg bg-white  mb-10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-wrap w-full content-start p-6 ">
                <div className="flex flex-wrap flex-col justify-center w-full my-6">
                  <span className="text-xl font-bold">Our Vision</span>
                  <p className="text-pretty text-justify leading-8">
                    Our vision is to be a leading global holding company recognized for our
                    unwavering commitment to excellence, integrity, and responsible investment
                    practices. We aspire to build and sustain a resilient portfolio that transcends
                    industries, leveraging emerging opportunities and technologies to shape the
                    future of our investments. By prioritizing long-term value creation and
                    embracing sustainable practices, we aim to be a catalyst for positive change,
                    driving economic prosperity and societal impact. We are dedicated to sustainable
                    growth and exceptional management practices, ensuring that our portfolio
                    consistently delivers superior returns while creating lasting value for our
                    stakeholders and contributing to a better world for future generations.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-wrap w-full shadow-lg bg-white  mb-10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-wrap w-full content-start p-6 ">
                <div className="flex flex-wrap flex-col justify-center w-full my-6">
                  <span className="text-xl font-bold">Our Mission</span>
                  <p className="text-pretty text-justify leading-8">
                    At New Element Inc., our mission is to cultivate a diverse portfolio of
                    strategic investments that drive sustainable growth and deliver superior value
                    to our stakeholders. We are committed to creating long-term value through
                    investments in diverse industries, identifying and nurturing promising
                    businesses, and fostering innovation. By empowering our subsidiaries to thrive
                    in dynamic markets, we aim to maximize returns while maintaining a strong
                    ethical foundation and contributing positively to the communities we serve.
                    Through diligent stewardship and ethical leadership, we strive to be a force for
                    positive change and sustainable development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Vision;
