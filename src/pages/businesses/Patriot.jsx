import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Breadcrumbs } from "@/components/breadcrumbs";

function Patriot() {
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
      <div className="bg-[url('/images/background/patriot-bg.jpg')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="bg-white">
        <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
          <Breadcrumbs
            home="home"
            previousPages={[{ name: "our business", link: "/business" }]}
            current="Partnerships"
          />
        </div>
        <div className="container flex-grow flex flex-wrap py-20 px-3">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-5">
              <h1
                className="text-center text-pretty text-2xl font-bold uppercase text-black"
                data-aos="fade-up"
              >
                PATRIOT WATCH CO., LTD
              </h1>
              <h2
                className="text-center text-sm font-bold text-zinc-500"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Mechanical Watches
              </h2>
            </div>
            <div
              className="flex flex-wrap justift-around bg-white border m-5 content-center items-center rounded shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-wrap flex-col text-center content-center justify-center w-full lg:w-1/4 p-5">
                <img src="/images/environment/Patriot.jpg" className="aspect-square w-48 mx-auto" />
                {/* <h1 className="text-sm font-bold uppercase my-2">PATRIOT WATCH CO., LTD</h1> */}
              </div>
              <div className="flex flex-wrap w-full lg:w-3/4 bg-white rounded">
                <div className="flex flex-wrap w-full content-start p-5">
                  <p className="mt-4 text-justify">
                    Experience the artistry of timekeeping with Patriot Watch Co., Ltd., a
                    distinguished manufacturer of mechanical watches. Each timepiece is meticulously
                    crafted to blend precision engineering with timeless elegance. With a commitment
                    to heritage craftsmanship, Patriot Watch Co., Ltd. ensures every watch is a
                    masterpiece, designed to accompany you through life's moments with style and
                    reliability. Explore our collection and discover the embodiment of luxury and
                    precision in mechanical watchmaking.
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
export default Patriot;
