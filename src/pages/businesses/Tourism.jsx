import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Breadcrumbs } from "@/components/breadcrumbs";
function Tourism() {
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
      <div className="bg-[url('/images/businesses/Golf-tourism-traveling.jpg')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="bg-white">
        <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
          <Breadcrumbs
            home="home"
            previousPages={[{ name: "our business", link: "/business" }]}
            current="Golf Tourism"
          />
        </div>
        <div className="container flex-grow flex flex-wrap py-20 px-3">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-5">
              <h1
                className="text-center text-4xl font-bold uppercase text-black"
                data-aos="fade-up"
              >
                Golf Travel / Tourism
              </h1>
              <h2
                className="text-center text-sm font-bold text-zinc-500"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Explore Golfing Destinations: Your Gateway to Memorable Golf Travel Experiences
              </h2>
            </div>
            <div
              className="flex flex-wrap justift-around bg-white border m-5 content-center items-center rounded shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-wrap flex-col text-center content-center justify-center w-full lg:w-1/4 p-5">
                <img
                  src="/images/environment/Green-Grass.jpg"
                  className="aspect-square w-48 mx-auto"
                />
                <h1 className="font-bold uppercase my-2">GREEN GRASS TRAVELING CORP.</h1>
              </div>
              <div className="flex flex-wrap w-full lg:w-3/4 bg-white rounded">
                <div className="flex flex-wrap w-full content-start p-5">
                  <p className="mt-4 text-justify">
                    Welcome to Green Grass Traveling Corp., your premier provider of exceptional
                    golf travel and tour experiences. Specializing in curated golfing journeys
                    around the world, Green Grass Traveling Corp. is dedicated to combining your
                    passion for golf with unforgettable travel adventures. At Green Grass Traveling
                    Corp., we offer bespoke golf travel packages that cater to both avid golfers and
                    leisure travelers alike. Whether you dream of teeing off at renowned courses,
                    exploring exotic golf destinations, or participating in exclusive golf
                    tournaments, our expert team is committed to crafting personalized itineraries
                    that exceed your expectations. Our commitment to excellence ensures that every
                    aspect of your golf travel experience is meticulously planned and seamlessly
                    executed. From luxury accommodations to VIP golf course access and tailored
                    sightseeing excursions, Green Grass Traveling Corp. guarantees a journey filled
                    with unparalleled golfing and cultural experiences.
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
export default Tourism;
