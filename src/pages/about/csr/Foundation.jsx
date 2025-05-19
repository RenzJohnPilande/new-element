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

function Foundation() {
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
      <div className="bg-[url('/images/csr/young-futures.jpg')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
        <Breadcrumbs
          home="home"
          previousPages={[
            { name: "about us", link: "/about" },
            { name: "csr", link: "/csr" },
          ]}
          current="Empowering young futures"
        />
      </div>
      <div>
        <div className="container flex-grow flex flex-wrap py-5 px-3">
          <div className="flex flex-wrap w-full ">
            <div className="flex flex-wrap w-full content-start md:p-6">
              <div className="flex flex-wrap flex-col content-center justify-center w-full my-6 text-center">
                <h1 className="text-3xl font-bold text-black mb-2">Empowering young futures</h1>
                <p className="text-lg text-black">
                  Our commitment to positively impacting society and the environment.
                </p>
              </div>
              <div className="flex flex-wrap w-full md:px-10 text-pretty border bg-white p-6">
                <div className="w-full text-justify">
                  <p className="leading-8 mb-4">
                    At <span className="font-semibold">New Element Inc.</span>, we are dedicated to
                    making a positive impact on the lives of children through our partnership with
                    the <span className="font-semibold">Ciara Marie Foundation </span> and
                    <span className="font-semibold">
                      International Christian Outreach and Relief (INCOR)
                    </span>
                    . We believe in nurturing the potential of every child and providing them with
                    opportunities to thrive.
                  </p>
                  <div className="flex flex-wrap flex-col my-4">
                    <p className="text-start leading-8 font-semibold">
                      Our collaboration with children's foundations aims to:
                    </p>
                    <p className="my-2">
                      <span className="font-medium">Empower Growth:</span> By supporting educational
                      initiatives, health programs, and enrichment activities that foster personal
                      and academic development.
                    </p>
                    <p className="my-2">
                      <span className="font-medium">Inspire Hope:</span> Through our contributions,
                      we aim to uplift children facing challenges, offering them encouragement and
                      resources to overcome obstacles.
                    </p>
                    <p className="my-2">
                      <span className="font-medium">Create Futures:</span> We invest in sustainable
                      projects that lay the groundwork for a brighter future, ensuring children have
                      access to essential resources for long-term success.
                    </p>
                  </div>
                  <p className="leading-8 mb-4">
                    At <span className="font-semibold">New Element Inc.</span>, we are committed to
                    supporting children's foundations as part of our mission to enrich lives and
                    contribute positively to our community. Through our efforts, we strive to create
                    a nurturing environment where every child can thrive and achieve their dreams.
                  </p>
                </div>
                <div className="flex justify-center w-full my-5">
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
                          src="/images/csr/young-futures-2.jpg"
                          className="w-full aspect-video object-cover h-64"
                          alt="young-futures.jpg"
                        />
                      </CsrCarouselItem>
                      <CsrCarouselItem className="md:basis-1/3 gap-1">
                        <img
                          src="/images/csr/young-futures-3.jpg"
                          className="w-full aspect-video object-cover h-64"
                          alt="young-futures.jpg"
                        />
                      </CsrCarouselItem>
                      <CsrCarouselItem className="md:basis-1/3 gap-1">
                        <img
                          src="/images/csr/young-futures-4.jpg"
                          className="w-full aspect-video object-cover h-64"
                          alt="young-futures.jpg"
                        />
                      </CsrCarouselItem>
                      <CsrCarouselItem className="md:basis-1/3 gap-1">
                        <img
                          src="/images/csr/young-futures-5.jpg"
                          className="w-full aspect-video object-cover h-64"
                          alt="young-futures.jpg"
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

export default Foundation;
