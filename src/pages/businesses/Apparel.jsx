import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/breadcrumbs";
function Apparel() {
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
      <div className="bg-[url('/images/businesses/Golf-Apparel-and-accessories.jpg')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="bg-white">
        <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
          <Breadcrumbs
            home="home"
            previousPages={[{ name: "our business", link: "/business" }]}
            current="Golf Apparel and Accessories"
          />
        </div>
        <div className="container flex-grow flex flex-wrap py-20 px-3">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-5">
              <h1
                className="text-center text-center text-4xl font-bold uppercase text-black"
                data-aos="fade-up"
              >
                Golf Apparel and Accessories
              </h1>
              <h2
                className="text-center text-sm font-bold text-zinc-500"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Explore Your Style and Performance with Our Golf Apparel and Accessories
              </h2>
            </div>
            <Link
              to="http://golftimeph.com/"
              target="none"
              className="flex flex-wrap justift-around bg-white border m-5 content-center items-center rounded shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-wrap flex-col text-center content-center justify-center w-full lg:w-1/4 p-5">
                <img
                  src="/images/environment/Golf-Time.jpg"
                  className="aspect-square w-48 mx-auto"
                />
                <h1 className="font-bold uppercase my-2">Golf Time Corp.</h1>
              </div>
              <div className="flex flex-wrap w-full lg:w-3/4 bg-white rounded">
                <div className="flex flex-wrap w-full content-start p-5">
                  <p className="mt-4 text-justify">
                    Step into the world of premium golf apparel and accessories with Golf Time
                    Corp., your trusted distributor of K&G Golf Fashion Co., Ltd. Dedicated to
                    enhancing your golfing experience, Golf Time Corp. brings you an exclusive
                    selection of meticulously crafted products designed by K&G Golf Fashion Co.,
                    Ltd. Each piece combines cutting-edge technology with timeless style, ensuring
                    optimal performance and comfort on the green. From innovative moisture-wicking
                    fabrics to stylish yet functional designs, our collection is tailored to meet
                    the needs of golf enthusiasts at every level. Whether you're perfecting your
                    swing or enjoying a day on the course, Golf Time Corp. provides you with
                    everything you need to excel in both style and performance. Discover the perfect
                    blend of quality and innovation with Golf Time Corp., where every product
                    reflects a commitment to excellence in golf fashion.
                  </p>
                  <div className="my-2">
                    <Link
                      to="http://golftimeph.com/"
                      className="text-base font-semibold text-slate-950 hover:text-red-600"
                    >
                      www.golftimeph.com
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Apparel;
