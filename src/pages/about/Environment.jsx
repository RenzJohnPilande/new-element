import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../../components/breadcrumbs";

function Environment() {
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
      <div className="bg-environment lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
        <Breadcrumbs
          home="home"
          previousPages={[{ name: "about us", link: "/about" }]}
          current="Our Business Ecological Environment"
        />
      </div>
      <div className="container-fluid flex-grow flex flex-wrap py-5 px-3 w-full text-black">
        <div className="flex flex-wrap w-full">
          <div className="container flex flex-wrap w-full content-start px-2">
            <div className="flex flex-wrap flex-col content-center justify-center w-full my-6 text-center text-pretty">
              <span className="text-3xl font-bold mb-2" data-aos="fade-up">
                Our Business Ecological Environment
              </span>
              <p className="text-lg" data-aos="fade-up" data-aos-delay="100">
                The future we envision and the mission that inspires us
              </p>
            </div>
            <div className="flex flex-wrap w-full  mb-10">
              <div className="flex flex-wrap w-full content-start p-6 ">
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5">
                  <Link
                    to="../../business/apparel"
                    className="flex flex-wrap flex-col justify-center text-center uppercase shadow-lg bg-white w-full"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="flex flex-wrap justify-center p-5 w-full border-b">
                      <img
                        src="/images/environment/Golf-Time.jpg"
                        className="aspect-square w-full p-14 md:p-5 rounded-lg"
                      />
                    </div>
                    <h1 className="text-sm text-pretty line-clamp-2 font-semibold my-2">
                      Golf Time Corp.
                    </h1>
                    <h2 className="text-xs my-2">Golf apparel and accessories</h2>
                  </Link>
                  <Link
                    to="../../business/promotion"
                    className="flex flex-wrap flex-col justify-center text-center uppercase shadow-lg bg-white w-full"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="flex flex-wrap justify-center p-5 w-full border-b">
                      <img
                        src="/images/environment/Stars-Brilliant.jpg"
                        className="aspect-square w-full p-14 md:p-5 rounded-lg"
                      />
                    </div>
                    <h1 className="text-sm text-pretty line-clamp-2 font-semibold my-2">
                      Stars Brilliant Corp
                    </h1>
                    <h2 className="text-xs my-2">branding Promotion and Advertising</h2>
                  </Link>
                  <Link
                    to="../../business/agent"
                    className="flex flex-wrap flex-col justify-center text-center uppercase shadow-lg bg-white w-full"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="flex flex-wrap justify-center p-5 w-full border-b">
                      <img
                        src="/images/environment/La-Plata.jpg"
                        className="aspect-square w-full p-14 md:p-5 rounded-lg"
                      />
                    </div>
                    <h1 className="text-sm text-pretty line-clamp-2 font-semibold my-2">
                      La Plata
                    </h1>
                    <h2 className="text-xs my-2">Professional Golfer Agency</h2>
                  </Link>
                  <Link
                    to="../../business/cart"
                    className="flex flex-wrap flex-col justify-center text-center uppercase shadow-lg bg-white w-full"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="flex flex-wrap justify-center p-5 w-full border-b">
                      <img
                        src="/images/environment/Maharlika.jpg"
                        className="aspect-square w-full p-14 md:p-5 rounded-lg"
                      />
                    </div>
                    <h1 className="text-sm text-pretty line-clamp-2 font-semibold my-2">
                      Maharlika Electric Vehicle Inc
                    </h1>
                    <h2 className="text-xs my-2">Golf Cart and Electric Vehicle</h2>
                  </Link>
                  <Link
                    to="../../business/technology"
                    className="flex flex-wrap flex-col justify-center text-center uppercase shadow-lg bg-white w-full"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="flex flex-wrap justify-center p-5 w-full border-b">
                      <img
                        src="/images/environment/Sparks.jpg"
                        className="aspect-square w-full p-14 md:p-5 rounded-lg"
                      />
                    </div>
                    <h1 className="text-sm text-pretty line-clamp-2 font-semibold my-2">
                      Sparks I&T service Inc
                    </h1>
                    <h2 className="text-xs my-2">Technology and information</h2>
                  </Link>
                  <Link
                    to="../../business/tourism"
                    className="flex flex-wrap flex-col justify-center text-center uppercase shadow-lg bg-white w-full"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="flex flex-wrap justify-center p-5 w-full border-b">
                      <img
                        src="/images/environment/Green-Grass.jpg"
                        className="aspect-square w-full p-14 md:p-5 rounded-lg"
                      />
                    </div>
                    <h1 className="text-sm text-pretty line-clamp-2 font-semibold my-2">
                      Green Grass Traveling Corp.
                    </h1>
                    <h2 className="text-xs my-2">Golf Travel/Tour</h2>
                  </Link>
                  <Link
                    to="../../business/patriot"
                    className="flex flex-wrap flex-col justify-center text-center uppercase shadow-lg bg-white w-full"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="flex flex-wrap justify-center p-5 w-full border-b">
                      <img
                        src="/images/environment/Patriot.jpg"
                        className="aspect-square w-full p-14 md:p-5 rounded-lg"
                      />
                    </div>
                    <h1 className="text-sm text-pretty line-clamp-2 font-semibold my-2">
                      Patriot Watch Co., Ltd
                    </h1>
                    <h2 className="text-xs my-2">Mechanical watches</h2>
                  </Link>
                  <Link
                    to="../../business/gtw"
                    className="flex flex-wrap flex-col justify-center text-center uppercase shadow-lg bg-white w-full"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="flex flex-wrap justify-center p-5 w-full border-b">
                      <img
                        src="/images/environment/GTW.jpg"
                        className="aspect-square w-full p-14 md:p-5 rounded-lg"
                      />
                    </div>
                    <h1 className="text-sm text-pretty line-clamp-2 font-semibold my-2">
                      GTW Innovation Corp.
                    </h1>
                    <h2 className="text-xs my-2">Electronic Wearable Device</h2>
                  </Link>
                  <Link
                    to="../../business/mingxiu"
                    className="flex flex-wrap flex-col justify-center text-center uppercase shadow-lg bg-white w-full"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="flex flex-wrap justify-center p-5 w-full border-b">
                      <img
                        src="/images/environment/mingxiu.jpg"
                        className="aspect-square w-full p-14 md:p-5 rounded-lg"
                      />
                    </div>
                    <h1 className="text-sm text-pretty line-clamp-2 font-semibold my-2">
                      MINGXIU BIOTECHNOLOGY CO., LTD
                    </h1>
                    <h2 className="text-xs my-2">Sun Block and whitening product</h2>
                  </Link>
                  <Link
                    to="../../business/uptrend"
                    className="flex flex-wrap flex-col justify-center text-center uppercase shadow-lg bg-white w-full"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="flex flex-wrap justify-center p-5 w-full border-b">
                      <img
                        src="/images/environment/Uptrend.jpg"
                        className="aspect-square w-full p-14 md:p-5 rounded-lg"
                      />
                    </div>
                    <h1 className="text-sm text-pretty line-clamp-2 font-semibold my-2">
                      Uptrend International Trade Co. ltd
                    </h1>
                    <h2 className="text-xs my-2">Trading/Import and Export</h2>
                  </Link>
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

export default Environment;
