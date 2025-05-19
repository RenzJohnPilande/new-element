import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Breadcrumbs } from "@/components/breadcrumbs";
function Equipment() {
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
      <div className="bg-[url('/images/businesses/Golf-equipment.jpg')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="bg-white">
        <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
          <Breadcrumbs
            home="home"
            previousPages={[{ name: "our business", link: "/business" }]}
            current="Golf Equipment"
          />
        </div>
        <div className="container flex-grow flex flex-wrap py-20 px-3">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-5">
              <h1
                className="text-center text-4xl font-bold uppercase text-black"
                data-aos="fade-up"
              >
                Golf Equipment
              </h1>
              <h2
                className="text-center text-sm font-bold text-zinc-500"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Enhance Your Game with Superior Golf Equipment
              </h2>
            </div>
            <div className="flex flex-wrap w-full my-4 bg-white rounded">
              <div className="flex flex-wrap w-full content-start p-5">
                <p
                  className="text-base xl:text-lg mt-4 text-justify"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Discover a comprehensive selection of high-quality golf equipment meticulously
                  crafted for precision and peak performance. Whether you're looking for
                  state-of-the-art clubs, advanced golf balls, durable bags, or essential
                  accessories, our extensive range covers all aspects of your game. Each piece of
                  equipment is chosen with care to enhance your skills and enjoyment on the fairway,
                  ensuring you're equipped to perform at your best.
                </p>
                <p
                  className="text-base xl:text-lg mt-4 text-justify"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  At our establishment, we prioritize excellence in golf equipment, providing
                  products that meet the highest standards of quality and innovation. Explore our
                  diverse collection today and find the tools that match your style and skill level,
                  empowering you to elevate your game and achieve new heights of success on every
                  course you play.
                </p>
              </div>
              {/* <div className="flex flex-wrap w-full lg:w-1/2 p-5 content-center">
                <img
                  src="/images/businesses/Golf-equipment.jpg"
                  className="rounded w-full max-h-96 object-cover rounded-lg shadow-lg shadow-black"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Equipment;
