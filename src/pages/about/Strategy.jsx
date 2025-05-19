import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Breadcrumbs } from "../../components/breadcrumbs";

function Strategy() {
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
      <div className="bg-strategy lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
        <Breadcrumbs
          home="home"
          previousPages={[{ name: "about us", link: "/about" }]}
          current="our strategies"
        />
      </div>
      <div className="container flex-grow flex flex-wrap py-5 px-3">
        <div className="flex flex-wrap w-full">
          <div className="flex flex-wrap flex-col content-center justify-center w-full my-6 text-center">
            <h1 className="text-3xl font-bold text-black mb-2" data-aos="fade-up">
              Our Strategy
            </h1>
            <p className="text-lg text-black" data-aos="fade-up" data-aos-delay="100">
              Innovative approaches and actionable plans for sustainable growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="flex flex-wrap w-full content-start border bg-white p-6 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-wrap w-full md:px-10 text-justify text-pretty">
                <div className="w-full lg:px-2">
                  <span className="text-xl font-bold capitalize">Expand Portfolio</span>
                  <p className="leading-7">
                    Diversify our investment portfolio with high-potential ventures and acquisitions
                    in emerging markets and innovative sectors. Through careful selection and
                    nurturing, we aim to maximize returns and portfolio resilience.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-wrap w-full content-start border bg-white p-6 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-wrap w-full md:px-10 text-justify text-pretty">
                <div className="w-full lg:px-2">
                  <span className="text-xl font-bold capitalize">Sustainability Initiatives</span>
                  <p className="leading-7">
                    Enhance sustainability across all subsidiaries by reducing our carbon footprint
                    and improving resource efficiency. We implement green technologies and set
                    measurable targets for energy efficiency, water conservation, and emissions
                    reduction.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-wrap w-full content-start border bg-white p-6 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-wrap w-full md:px-10 text-justify text-pretty">
                <div className="w-full lg:px-2">
                  <span className="text-xl font-bold capitalize">Innovation and Technology</span>
                  <p className="leading-7">
                    Invest in cutting-edge technologies to drive innovation and maintain competitive
                    advantage. We prioritize research and development, digital transformation, and
                    advanced analytics to enhance operational efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-wrap w-full content-start border bg-white p-6 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-wrap w-full md:px-10 text-justify text-pretty">
                <div className="w-full lg:px-2">
                  <span className="text-xl font-bold capitalize">Global Reach</span>
                  <p className="leading-7">
                    Strengthen our global presence through strategic international partnerships and
                    market expansion. We aim to enter new markets, collaborate with local
                    businesses, and adapt offerings to meet regional demands.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-wrap w-full content-start border bg-white p-6 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-wrap w-full md:px-10 text-justify text-pretty">
                <div className="w-full lg:px-2">
                  <span className="text-xl font-bold capitalize">Community Engagement</span>
                  <p className="leading-7">
                    Increase community outreach and corporate social responsibility efforts to
                    positively impact society. We invest in education, healthcare, and social
                    programs, and promote employee volunteerism and philanthropy to foster strong
                    community relationships.
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

export default Strategy;
