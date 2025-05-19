import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import {
  CsrCarousel,
  CsrCarouselContent,
  CsrCarouselItem,
  CsrCarouselNext,
  CsrCarouselPrevious,
} from "@/components/ui/csrcarousel";
import Autoplay from "embla-carousel-autoplay";
import { Breadcrumbs } from "../../../components/breadcrumbs";

function Industry() {
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
      <div className="bg-[url('/images/csr/golf-industry.jpg')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
        <Breadcrumbs
          home="home"
          previousPages={[
            { name: "about us", link: "/about" },
            { name: "csr", link: "/csr" },
          ]}
          current="golf industry"
        />
      </div>
      <div>
        <div className="container flex-grow flex flex-wrap py-5 px-3">
          <div className="flex flex-wrap w-full ">
            <div className="flex flex-wrap w-full content-start md:p-6">
              <div className="flex flex-wrap flex-col content-center justify-center w-full my-6 text-center">
                <h1 className="text-3xl font-bold text-black mb-2">Golf Industry</h1>
                <p className="text-lg text-black">
                  Our commitment to positively impacting society and the environment.
                </p>
              </div>
              <div className="flex flex-wrap w-full md:px-10 text-pretty border bg-white p-6">
                <div className="w-full text-justify">
                  <p className="leading-8 mb-4">
                    <span className="font-semibold">New Element Inc.</span>, stands at the forefront
                    of the golfing industry, driven by a passion to innovate and elevate the sport
                    in the Philippines and beyond. Established in 2015, our company specializes in a
                    comprehensive range of products and services tailored to enrich every aspect of
                    the golfing experience.
                  </p>
                  <div className="flex flex-wrap flex-col my-4">
                    <p className="leading-8 font-medium">
                      We are dedicated to enhancing the golfing experience through:
                    </p>
                    <p className="my-1">
                      <span className="font-medium">Apparel and Equipment:</span> Providing premium
                      golf apparel, accessories, and state-of-the-art equipment.
                    </p>
                    <p className="my-1">
                      <span className="font-medium">Marketing and Management:</span> Expertise in
                      strategic marketing, professional management services, and tournament
                      organization.
                    </p>
                    <p className="my-1">
                      <span className="font-medium">Travel and Technology:</span> Curating bespoke
                      golf travel experiences and offering innovative golf carts, gadgets, and an
                      online platform for enthusiasts.
                    </p>
                  </div>
                  <p className="leading-8 mb-4">
                    Discover how <span className="font-semibold">New Element Inc.</span> can elevate
                    your golfing journey today.
                  </p>
                </div>
                <div className="flex w-full my-5 justify-center">
                  <CsrCarousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    plugins={[
                      Autoplay({
                        delay: 2000,
                      }),
                    ]}
                  >
                    <CsrCarouselContent>
                      <CsrCarouselItem className="md:basis-1/3 gap-1">
                        <img
                          src="/images/csr/golf-industry-2.jpg"
                          className="w-full aspect-video object-cover h-64"
                          alt="golf-industry.jpg"
                        />
                      </CsrCarouselItem>
                      <CsrCarouselItem className="md:basis-1/3 gap-1">
                        <img
                          src="/images/csr/golf-industry-3.jpg"
                          className="w-full aspect-video object-cover h-64"
                          alt="golf-industry.jpg"
                        />
                      </CsrCarouselItem>
                      <CsrCarouselItem className="md:basis-1/3 gap-1">
                        <img
                          src="/images/csr/golf-industry-4.jpg"
                          className="w-full aspect-video object-cover h-64"
                          alt="golf-industry.jpg"
                        />
                      </CsrCarouselItem>
                    </CsrCarouselContent>
                    <div className="flex flex-wrap justify-center my-2">
                      <CsrCarouselPrevious />
                      <CsrCarouselNext />
                    </div>
                  </CsrCarousel>
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

export default Industry;
