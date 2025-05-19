import Autoplay from "embla-carousel-autoplay";
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
import { Breadcrumbs } from "../../../components/breadcrumbs";

function Support() {
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
      <div className="bg-[url('/images/csr/supporting-community.jpg')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
        <Breadcrumbs
          home="home"
          previousPages={[
            { name: "about us", link: "/about" },
            { name: "csr", link: "/csr" },
          ]}
          current="supporting the community"
        />
      </div>
      <div>
        <div className="container flex-grow flex flex-wrap py-5 px-3">
          <div className="flex flex-wrap w-full ">
            <div className="flex flex-wrap w-full content-start md:p-6">
              <div className="flex flex-wrap flex-col content-center justify-center w-full my-6 text-center">
                <h1 className="text-3xl font-bold text-black mb-2">Supporting the Community</h1>
                <p className="text-lg text-black">
                  Our commitment to positively impacting society and the environment.
                </p>
              </div>
              <div className="flex flex-wrap w-full md:px-10 text-pretty border bg-white p-6">
                <div className="w-full text-justify">
                  <h1 className="text-lg font-semibold capitalize mb-4">
                    Community Rescue and Development Initiatives at New Element Inc.
                  </h1>
                  <p className="leading-8 mb-4">
                    At <span className="font-semibold">New Element Inc.</span>, we are deeply
                    committed to making a meaningful impact in our community through dedicated
                    efforts in rescue and development. Our initiatives focus on uplifting and
                    empowering individuals and families, ensuring sustainable progress and a
                    brighter future for all.
                  </p>
                  <div className="my-5">
                    <h1 className="font-semibold text-lg">Rescue Efforts</h1>
                    <p className="text-justify">
                      New Element Inc. actively participates in community rescue missions during
                      times of crisis or natural disasters. We provide immediate aid, including
                      food, shelter, and medical assistance, to those affected, helping to stabilize
                      and support communities in their time of need.
                    </p>
                  </div>
                  <div className="my-5">
                    <h1 className="font-semibold text-lg">Partnerships and Collaboration</h1>
                    <p className="text-justify">
                      Through strategic partnerships with local organizations and stakeholders, New
                      Element Inc. leverages collective expertise and resources to maximize our
                      impact. Together, we implement sustainable solutions that address community
                      needs and promote inclusive growth.
                    </p>
                  </div>
                  <div className="my-5">
                    <h1 className="font-semibold text-lg">Development Programs</h1>
                    <p className="text-justify">
                      Our commitment extends beyond immediate relief to long-term development
                      projects aimed at building resilient communities. We invest in initiatives
                      that promote education, healthcare access, and economic empowerment, fostering
                      self-sufficiency and enhancing quality of life.
                    </p>
                  </div>
                  <div className="my-5">
                    <h1 className="font-semibold text-lg">Environmental Sustainability</h1>
                    <p className="text-justify">
                      Recognizing the importance of environmental stewardship, New Element Inc.
                      engages in projects that promote sustainability and conservation. We advocate
                      for responsible practices and support initiatives that protect natural
                      resources and preserve biodiversity.
                    </p>
                  </div>
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
                          src="/images/csr/supporting-community-2.jpg"
                          className="w-full aspect-video object-cover h-64"
                          alt="supporting-community.jpg"
                        />
                      </CsrCarouselItem>
                      <CsrCarouselItem className="md:basis-1/3 gap-1">
                        <img
                          src="/images/csr/supporting-community-3.jpg"
                          className="w-full aspect-video object-cover h-64"
                          alt="supporting-community.jpg"
                        />
                      </CsrCarouselItem>
                      <CsrCarouselItem className="md:basis-1/3 gap-1">
                        <img
                          src="/images/csr/supporting-community-4.jpg"
                          className="w-full aspect-video object-cover h-64"
                          alt="supporting-community.jpg"
                        />
                      </CsrCarouselItem>
                      <CsrCarouselItem className="md:basis-1/3 gap-1">
                        <img
                          src="/images/csr/supporting-community-5.jpg"
                          className="w-full aspect-video object-cover h-64"
                          alt="supporting-community.jpg"
                        />
                      </CsrCarouselItem>
                      <CsrCarouselItem className="md:basis-1/3 gap-1">
                        <img
                          src="/images/csr/supporting-community-6.jpg"
                          className="w-full aspect-video object-cover h-64"
                          alt="supporting-community.jpg"
                        />
                      </CsrCarouselItem>
                      <CsrCarouselItem className="md:basis-1/3 gap-1">
                        <img
                          src="/images/csr/supporting-community-7.jpg"
                          className="w-full aspect-video object-cover h-64"
                          alt="supporting-community.jpg"
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

export default Support;
