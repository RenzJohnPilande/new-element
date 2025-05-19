import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Breadcrumbs } from "../../components/breadcrumbs";

function History() {
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
      <div className="bg-history lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
        <Breadcrumbs
          home="home"
          previousPages={[{ name: "about us", link: "/about" }]}
          current="our history"
        />
      </div>
      <div className="container flex-grow flex flex-wrap py-5 px-3">
        <div className="flex flex-wrap w-full mb-5">
          <div className="flex flex-wrap w-full content-start p-6 ">
            <div className="flex flex-wrap flex-col content-center justify-center w-full my-6 text-center">
              <h1 className="text-3xl font-bold text-black mb-2" data-aos="fade-up">
                Our History
              </h1>
              <p className="text-lg text-black" data-aos="fade-up" data-aos-delay="100">
                A journey through our milestones and achievements over the years.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-full shadow-lg mb-5">
          <div
            className="flex flex-wrap w-full content-start border bg-white/90 p-6 "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-wrap flex-col justify-center w-full my-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center md:text-start">
                Founding Story
              </h1>
              <p className="text-lg text-gray-600 text-justify">
                In 2016, New Element Inc. embarked on its journey with the exclusive distribution
                rights for K&G, a prestigious Golf Apparel and Accessories brand in the Philippines.
                The company's roots were planted in Muntinlupa City, where it began laying the
                groundwork for its future endeavors. This pivotal moment marked the genesis of New
                Element Inc.'s commitment to excellence and innovation in the golf industry.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-full shadow-lg mb-5">
          <div
            className="flex flex-wrap w-full content-start border bg-white/90 p-6 "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-wrap flex-col justify-center w-full my-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center md:text-end">
                Evolution and Growth
              </h1>
              <p className="text-lg text-gray-600 text-justify">
                Since its inception, New Element Inc. has continuously evolved and expanded its
                horizons. From its modest beginnings, the company has emerged as a trailblazer,
                spearheading breakthroughs and advancements in every facet of the golf industry's
                evolution. Beyond distribution, New Element Inc. has diversified its portfolio,
                venturing into multi-national trading, real estate, and property development. This
                strategic expansion not only solidified its market presence but also catalyzed
                economic growth by empowering entrepreneurs and visionaries to pursue their
                ambitions.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-full shadow-lg mb-5">
          <div
            className="flex flex-wrap w-full content-start border bg-white/90 p-6 "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-wrap flex-col justify-center w-full my-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center md:text-start">
                Present Impact
              </h1>
              <p className="text-lg text-gray-600 text-justify">
                Today, New Element Inc. stands as a beacon of innovation and excellence in the golf
                industry. With a steadfast commitment to pushing boundaries and staying ahead of the
                curve, the company continues to shape the industry's trajectory. Its unwavering
                dedication to quality and customer satisfaction has earned New Element Inc. a
                reputation as a trusted partner for golf enthusiasts and industry professionals
                alike. Looking forward, the company remains poised for continued success, poised to
                redefine the future of the golf industry and make a lasting impact on the global
                stage.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default History;
